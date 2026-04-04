/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030305',
        surface: '#0a0a0f',
        primary: {
          DEFAULT: '#6b32ec',
          light: '#8e62ff',
          dark: '#4f15d2',
        },
        secondary: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#1e30f3',
        },
        accent: {
          DEFAULT: '#10b981', // green for CTA
          light: '#34d399',
          hover: '#059669',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'brain-pulse': 'brainPulse 3s infinite alternate',
        'particle': 'particleFloat 4s infinite linear',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(16, 185, 129, 0.2), 0 0 10px rgba(16, 185, 129, 0.2)' },
          '100%': { boxShadow: '0 0 10px rgba(16, 185, 129, 0.6), 0 0 20px rgba(16, 185, 129, 0.4)' },
        },
        brainPulse: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(107, 50, 236, 0.3)) brightness(1)' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(107, 50, 236, 0.8)) brightness(1.2)' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: 0 },
          '50%': { opacity: 0.6 },
          '100%': { transform: 'translateY(-30px) scale(0)', opacity: 0 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
