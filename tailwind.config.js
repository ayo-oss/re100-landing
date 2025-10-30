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
      fontSize: {
        'display': ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 포인트 볼드체 (40px)
        'title': ['2rem', { lineHeight: '1.2', fontWeight: '700' }], // 타이틀 (32px)
        'content-title': ['1.778rem', { lineHeight: '1.3', fontWeight: '700' }], // 컨텐츠 타이틀 (28.45px)
        'body': ['1.125rem', { lineHeight: '1.7' }], // 공통 본문 (18px)
        'description': ['1.222rem', { lineHeight: '1.6' }], // 설명 (19.55px)
        'button': ['1.111rem', { lineHeight: '1.4', fontWeight: '600' }], // 버튼 (17.78px)
        'footer': ['1rem', { lineHeight: '1.6' }], // 푸터 · 옵션 (16px)
      },
    },
  },
  plugins: [],
}
