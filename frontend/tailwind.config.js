/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lead: {
          50: '#F4F2F0',
          100: '#E9E7E4',
          200: '#D8D5D1',
          300: '#BCB9B5',
          400: '#96938F',
          500: '#77746F',
          600: '#5C5A56',
          700: '#474541',
          800: '#33322F',
          900: '#262522',
          950: '#1B1A18',
        },
        wine: {
          50: '#FBF0F2',
          100: '#F5DEE3',
          200: '#EABAC4',
          300: '#D98A9B',
          400: '#C3556D',
          500: '#A92F49',
          600: '#8E2038',
          700: '#76182E',
          800: '#5D1225',
          900: '#430C1B',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -20px rgba(27, 26, 24, 0.25)',
        card: '0 24px 60px -28px rgba(27, 26, 24, 0.35)',
        wine: '0 18px 40px -16px rgba(142, 32, 56, 0.45)',
      },
      backgroundImage: {
        'wine-glow': 'radial-gradient(circle at 70% 20%, rgba(169,47,73,0.35), transparent 55%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'slide-in': 'slide-in 0.35s ease-out both',
      },
    },
  },
  plugins: [],
}
