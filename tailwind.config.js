/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1b8a5a',
          dark: '#0f5436',
          light: '#8cd0ac',
        },
      },
      fontFamily: {
        sans: ['"Pretendard Variable"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 50px -25px rgba(15, 84, 54, 0.25)',
      },
      maxWidth: {
        '6xl': '1400px',
        layout: '1400px',
      },
    },
  },
  plugins: [],
}
