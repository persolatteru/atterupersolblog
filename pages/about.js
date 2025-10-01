import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About - atteru Blog</title>
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-3">
          このブログについて
        </h1>
        
        {/* 記事本文のようなセクション */}
        <section className="space-y-6 text-gray-700">
          
          <h2 className="text-2xl font-bold text-gray-800 pt-4">目的</h2>
          <p>
            このブログは、私が学習した内容を覚書程度にまとめることを目的としています。
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 pt-4">自己紹介</h2>
          <p>
            IT業界でSEとして働いています。主にWebアプリケーションの開発の勉強をしています。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 pt-4">技術スタック</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>フロントエンド:</strong> Next.js (Pages Router, SSG)</li> 
            <li><strong>スタイリング:</strong> Tailwind CSS</li>
            <li><strong>ホスティング:</strong> Azure Static Web Apps (Free Plan)</li>
            <li><strong>バージョン管理:</strong> Git / GitHub Actions</li>
          </ul>
        </section>

      </div>
    </>
  )
}