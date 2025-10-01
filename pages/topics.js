import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'

export default function Topics({ allPostsData }) {
  return (
    <>
      <Head>
        <title>すべての記事 - atteru Blog</title>
      </Head>

      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-2">すべての記事一覧</h1>
        
        <ul className="space-y-6">
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <li key={slug} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
              <Link href={`/posts/${slug}`}>
                <div className="flex justify-between items-start">
                  {/* タイトルと概要 */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 hover:text-accent-600 transition duration-200 mb-1">
                      {title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {excerpt}
                    </p>
                  </div>
                  {/* 日付 */}
                  <time dateTime={date} className="text-sm text-gray-500 flex-shrink-0 ml-4">
                    {date}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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