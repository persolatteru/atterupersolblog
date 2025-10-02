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
            table: {
              width: '100%',
              borderCollapse: 'collapse',
              margin: '2rem 0',
            },
            'th, td': {
              padding: theme('spacing.3'),
              border: '1px solid ' + theme('colors.gray.300'),
              textAlign: 'left',
            },
            th: {
              fontWeight: theme('fontWeight.bold'),
              backgroundColor: theme('colors.gray.100'),
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