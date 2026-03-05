import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        charcoal: '#1A1A1A',
        gold: '#B8976A',
        sage: '#8A9A7B',
        mist: '#E8E4DF'
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-source-serif)', 'serif']
      },
      boxShadow: {
        'soft-card': '0 22px 60px -40px rgba(26, 26, 26, 0.45)'
      },
      backgroundImage: {
        'linen': 'radial-gradient(circle at 15% 15%, rgba(184, 151, 106, 0.12), transparent 42%), radial-gradient(circle at 85% 20%, rgba(138, 154, 123, 0.08), transparent 48%), radial-gradient(circle at 50% 78%, rgba(26, 26, 26, 0.04), transparent 60%), linear-gradient(180deg, rgba(250, 248, 245, 0.96), rgba(250, 248, 245, 0.9))'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
