import Link from 'next/link'
import PostCard from '../components/PostCard'
import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'
import Image from 'next/image' 

export default function Home({ allPostsData }) {
  const latestPosts = allPostsData.slice(0, 3)

  return (
    <>
      <Head>
        <title>atteru Blog - モダンな開発を追求する</title>
      </Head>

      <div className="space-y-16">
        
        {/* ヒーローセクション */}
        <section className="text-center py-16 bg-white rounded-xl shadow-lg border border-gray-100">
          {/* アバター/写真の代わり */}
          <div className="mx-auto w-24 h-24 mb-6 relative">
            <Image 
              src="/IMG_2785.jpeg" // 💡 配置した画像ファイル名に修正
              alt="筆者のアバター" 
              layout="fill"
              objectFit="cover"
              className="rounded-full" // Tailwindで丸くする
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
            atteruの備忘録
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            実際に私が学習したことを覚書程度にまとめています。
          </p>
        </section>

        {/* 最新記事セクション */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">最新の記事</h2>
          
          {/* 最新記事3件のカード表示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>

          {/* すべて見るボタン */}
          <div className="text-center mt-10">
            <Link href="/topics" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent-600 hover:bg-accent-700 transition duration-200">
              すべての記事を見る &rarr;
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

// SSGのためのデータ取得
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}