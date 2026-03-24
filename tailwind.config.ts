import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'site-dark': '#2C1A0E',
        'site-card': '#0F0800',
        'site-card-hover': '#1A1000',
        'site-border': 'rgba(255, 255, 255, 0.08)',
        'site-border-accent': 'rgba(255, 106, 0, 0.35)',
        'site-border-green': 'rgba(45, 212, 191, 0.25)',
        'site-text': '#F5EDE0',
        'site-text-secondary': '#9A8878',
        'site-text-muted': '#6A5848',
        'site-text-dim': '#4A3828',
        'site-text-desc': '#7A6858',
        'site-context': '#9A7858',
        'site-orange': '#FF6A00',
        'site-orange-hover': '#FF8C38',
        'site-teal': '#34D399',
        'site-header-start': '#1A0C04',
        'site-header-end': '#2C1A0E',
      },
      fontFamily: {
        display: ['"Barlow Semi Condensed"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-up-d1': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards',
        'fade-up-d2': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards',
        'fade-up-d3': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards',
        'fade-up-d15': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
