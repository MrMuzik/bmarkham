import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Meridian Design System palette
        'bm-slate':   '#1B2634',
        'bm-dusk':    '#2D3F54',
        'bm-cream':   '#FAFAF7',
        'bm-teal':    '#0D8A7C',
        'bm-teal-dk': '#0a6b5f',
        'bm-seafoam': '#2DD4BF',
        'bm-stone':   '#78716C',
        'bm-coral':   '#EF4444',
        'bm-amber':   '#D97706',
        'bm-border-light': 'rgba(27,38,52,0.12)',
        'bm-border-dark':  'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['Fraunces', 'serif'],
      },
      borderRadius: {
        'sm': '3px',
        DEFAULT: '6px',
        'md': '10px',
        'lg': '16px',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 0.36s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-up-d1': 'fadeUp 0.36s cubic-bezier(0.16,1,0.3,1) 0.08s forwards',
        'fade-up-d2': 'fadeUp 0.36s cubic-bezier(0.16,1,0.3,1) 0.16s forwards',
        'fade-up-d3': 'fadeUp 0.36s cubic-bezier(0.16,1,0.3,1) 0.24s forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
