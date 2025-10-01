// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>私のAzureテストブログ</title>
      </Head>

      <main>
        <h1>ようこそ！Azure Static Web Apps テストブログへ</h1>
        <p>これはNext.jsで作成し、Azure Freeプランでホスティングした最初の投稿です。</p>
        <p>デプロイ成功！</p>
      </main>
    </div>
  );
}