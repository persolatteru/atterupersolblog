// lib/posts.js

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm' // 💡 追加: GFM (テーブル構文) をインポート

const postsDirectory = path.join(process.cwd(), 'posts')

// すべての記事のメタデータ（タイトル、スラッグなど）を取得
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // 💡 修正: dateをそのまま文字列として扱い、Invalid time valueエラーを回避
    const dateString = matterResult.data.date; 

    return {
      slug,
      date: dateString, // 文字列として保持
      ...matterResult.data,
    }
  })
  // 日付の新しい順にソート
  // dateが YYYY-MM-DD 形式の文字列であれば、そのまま比較ソート可能
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

// 特定の記事のMarkdownをHTMLに変換して取得
export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // gray-matterでメタデータとコンテンツを分離
  const matterResult = matter(fileContents)

  // remarkを使ってMarkdownをHTML文字列に変換
  const processedContent = await remark()
    .use(gfm) // 💡 修正: GFMを適用し、テーブル構文を有効化
    .use(html, { sanitize: false }) 
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // 💡 修正: dateを文字列としてそのまま取得
  const dateString = matterResult.data.date;

  return {
    slug,
    contentHtml,
    date: dateString, // 文字列として保持
    ...matterResult.data,
  }
}

// SSGに必要なすべてのスラッグを取得 (修正なし)
export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    }
  })
}