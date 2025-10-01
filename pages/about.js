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
            このブログは、モダンなWeb技術（Next.js、Tailwind CSS、Azure Static Web Apps）を使った開発を試すために作られました。
            特に、クラウドの無料枠を活用しながら、いかに高速でデザイン性の高いサイトを構築できるかを追求しています。
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 pt-4">自己紹介</h2>
          <p>
            ITインフラの分野に携わっています。最近はクラウド、特にMicrosoft AzureとAWSの知識習得に力を入れています。
            業務で得た知見や、新しい技術を学んだ際の備忘録として、情報を共有していきたいと考えています。
          </p>

          <h2 className="text-2xl font-bold text-gray-800 pt-4">技術スタック</h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>**フロントエンド:** Next.js (Pages Router, SSG)</li>
            <li>**スタイリング:** Tailwind CSS</li>
            <li>**ホスティング:** Azure Static Web Apps (Free Plan)</li>
            <li>**バージョン管理:** Git / GitHub Actions</li>
          </ul>
        </section>

      </div>
    </>
  )
}