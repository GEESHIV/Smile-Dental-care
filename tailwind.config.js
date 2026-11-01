/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            50: '#effbf9',
            100: '#d7f5f0',
            200: '#b0ebe1',
            300: '#7adccc',
            400: '#41c3b4',
            500: '#22a89a',
            600: '#16877e',
            700: '#156c66',
            800: '#165653',
            900: '#154846',
            950: '#052a29',
          },
          navy: {
            50: '#f0f6fe',
            100: '#dce9fc',
            200: '#c2d8fb',
            300: '#94bdf6',
            400: '#6199ee',
            500: '#3d77e0',
            600: '#245cc9',
            700: '#1d49a2',
            800: '#1d3e81',
            900: '#1c3668',
            950: '#152448',
          },
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(20, 60, 104, 0.15)',
        card: '0 20px 50px -20px rgba(20, 72, 70, 0.25)',
        glow: '0 0 40px -10px rgba(34, 168, 154, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
