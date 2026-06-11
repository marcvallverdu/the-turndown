type ResendError = {
  message?: string;
  name?: string;
  statusCode?: number;
};

type ResendContactResponse = {
  id?: string;
  object?: string;
  error?: ResendError;
};

type ResendSendResponse = {
  id?: string;
  data?: { id?: string } | Array<{ id?: string }>;
  error?: ResendError;
};

const RESEND_API_BASE = 'https://api.resend.com';

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

function resendHeaders() {
  return {
    Authorization: `Bearer ${requiredEnv('RESEND_API_KEY')}`,
    'Content-Type': 'application/json'
  };
}

function isDuplicateContact(error: ResendError | undefined) {
  const message = `${error?.name || ''} ${error?.message || ''}`.toLowerCase();
  return error?.statusCode === 409 || message.includes('already') || message.includes('exist');
}

async function parseResendResponse<T>(response: Response): Promise<T> {
  const payload = (await response.json().catch(() => ({}))) as T & { error?: ResendError };
  if (!response.ok || payload.error) {
    const message = payload.error?.message || `Resend API returned ${response.status}`;
    const error = new Error(message) as Error & { statusCode?: number; code?: string };
    error.statusCode = response.status;
    throw error;
  }
  return payload;
}

export async function syncContactToResendAudience(email: string) {
  const audienceId = requiredEnv('RESEND_AUDIENCE_ID');
  const response = await fetch(`${RESEND_API_BASE}/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: resendHeaders(),
    body: JSON.stringify({ email, unsubscribed: false })
  });

  const payload = (await response.json().catch(() => ({}))) as ResendContactResponse;
  if (!response.ok || payload.error) {
    if (isDuplicateContact(payload.error)) return { id: payload.id ?? null, duplicate: true };
    const message = payload.error?.message || `Resend contact sync returned ${response.status}`;
    throw new Error(message);
  }

  return { id: payload.id ?? null, duplicate: false };
}

export type OutboundEmail = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

export async function sendNewsletterBatch(emails: OutboundEmail[]) {
  if (emails.length === 0) return [];

  const from = process.env.NEWSLETTER_FROM || 'The Turndown <newsletter@theturndown.co>';
  const replyTo = process.env.NEWSLETTER_REPLY_TO || 'hello@theturndown.co';
  const payload = emails.map((email) => ({ ...email, from, reply_to: replyTo }));
  const response = await fetch(`${RESEND_API_BASE}/emails/batch`, {
    method: 'POST',
    headers: resendHeaders(),
    body: JSON.stringify(payload)
  });
  const result = await parseResendResponse<ResendSendResponse>(response);
  if (Array.isArray(result.data)) return result.data.map((item) => item.id).filter(Boolean) as string[];
  return result.data?.id ? [result.data.id] : result.id ? [result.id] : [];
}
