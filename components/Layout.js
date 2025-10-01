import Link from 'next/link'
import { FaTwitter, FaGithub } from 'react-icons/fa'

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-gray-100 hover:text-white transition duration-200 px-3 py-2 rounded-md font-medium">
    {children}
  </Link>
)

export default function Layout({ children }) {
  const blogName = "Minimal Blog"
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      
      {/* 1. 固定ナビゲーションバー (Sticky Header) */}
      <header className="sticky top-0 z-50 bg-accent-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* ブログ名 */}
            <Link href="/" className="text-2xl font-extrabold text-white">
              {blogName}
            </Link>

            {/* ナビゲーションリンク */}
            <nav className="flex space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/topics">Topics</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* 2. シンプルなフッター */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            
            {/* 著作権表示 */}
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {blogName}. All rights reserved.
            </p>
            
            {/* ソーシャルメディアアイコン */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="https://github.com/persolatteru" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-500 transition duration-200">
                <FaGithub size={20} />
              </a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}