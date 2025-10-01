import Head from 'next/head'
import Link from 'next/link'
import { getAllPostSlugs, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title} - Minimal Blog</title>
      </Head>
      
      <article className="bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-gray-100">
        
        {/* タイトルとメタデータ */}
        <header className="mb-8 border-b pb-4">
          <Link href="/topics" className="text-accent-600 hover:underline mb-2 block text-sm">&larr; 記事一覧へ戻る</Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
            {postData.title}
          </h1>
          <p className="text-sm text-gray-500">
            公開日: <time dateTime={postData.date}>{postData.date}</time>
          </p>
        </header>

        {/* 記事本文 (Markdownから変換されたHTML) */}
        {/* post-contentクラスに、styles/globals.cssで定義したMarkdown要素のスタイルが適用されます */}
        <div 
          className="post-content" 
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
        
      </article>
    </>
  )
}

// SSGのためのパス生成
export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false, // 存在しないパスは404
  }
}

// SSGのための記事データ取得
export async function getStaticProps({ params }) {
  // Markdown to HTMLの処理は非同期
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData,
    },
  }
}