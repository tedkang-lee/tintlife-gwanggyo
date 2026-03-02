/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'deep-brown': '#2C1810',
        gold: '#C9A84C',
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
        serif: ['"Noto Serif KR"', '"Playfair Display"', 'serif'],
      },
      letterSpacing: {
        korean: '0.05em',
        widest2: '0.3em',
        widest3: '0.4em',
      },
    },
  },
  plugins: [],
}
