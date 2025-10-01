/** @type {import('next').NextConfig} */
const nextConfig = {
  // 必須: SSG (Static Site Generation) の設定
  output: 'export',
  // 必須: 出力フォルダを 'out' に指定
  distDir: 'out',
  // オプショナル: Vercel以外のホスティング向け
  images: {
    unoptimized: true,
  },
  // 💡 修正: Tailwind CSSのビルドを安定させるための設定を追加
  transpilePackages: ['tailwindcss'],
}

module.exports = nextConfig