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
        sans: ['var(--font-inter)', 'sans-serif']
      },
      boxShadow: {
        'soft-card': '0 22px 60px -40px rgba(26, 26, 26, 0.45)'
      },
      backgroundImage: {
        'linen': 'radial-gradient(circle at 10% 10%, rgba(184, 151, 106, 0.14), transparent 45%), radial-gradient(circle at 90% 20%, rgba(138, 154, 123, 0.12), transparent 45%), radial-gradient(circle at 50% 80%, rgba(232, 228, 223, 0.6), transparent 65%)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
