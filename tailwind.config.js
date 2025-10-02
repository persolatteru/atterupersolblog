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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Markdown内のimgタグの最大幅を親コンテナに合わせる
            img: {
              width: '30%',     // 親要素の幅に合わせる
              maxWidth: '100%',  // 親要素の幅を超えないようにする
              height: 'auto',    // 縦横比を維持する
              borderRadius: theme('borderRadius.lg'), // 角を少し丸くする装飾
              margin: '2rem auto', // 中央寄せと上下マージンを追加
            },
          },
        },
      }),
    },
  },
  // 💡 修正: Typographyプラグインを追加
  plugins: [
    require('@tailwindcss/typography'),
  ],
}