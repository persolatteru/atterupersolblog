// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 💡 静的エクスポートモードを有効化
  output: 'export', 
  // 💡 静的ファイルの出力先を 'out' フォルダに設定
  distDir: 'out',
};

module.exports = nextConfig;