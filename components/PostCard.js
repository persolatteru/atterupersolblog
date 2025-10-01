// components/PostCard.js

import Link from 'next/link'

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="block">
      <div className="bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden h-full">
        <div className="p-6">
          {/* 日付 */}
          <time dateTime={post.date} className="text-sm text-accent-600 font-semibold uppercase tracking-wider">
            {post.date}
          </time>
          
          {/* タイトル */}
          <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3 leading-snug hover:text-accent-600 transition duration-200">
            {post.title}
          </h2>
          
          {/* 概要 */}
          <p className="text-gray-600 text-sm line-clamp-3">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  )
}