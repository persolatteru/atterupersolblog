/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // アクセントカラーとしてTealを使用
        accent: {
          500: '#14b8a6', // teal-500
          600: '#0d9488', // teal-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // モダンなフォントを指定
      }
    },
  },
  plugins: [],
}