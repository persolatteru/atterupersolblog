import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// すべての記事のメタデータ（タイトル、スラッグなど）を取得
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // スラッグをファイル名から取得
    const slug = fileName.replace(/\.md$/, '')

    // Markdownファイルを文字列として読み込む
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // gray-matterを使ってメタデータを解析
    const matterResult = matter(fileContents)

    // dateをDateオブジェクトに変換してソート可能にする
    const date = new Date(matterResult.data.date).toISOString().substring(0, 10)

    return {
      slug,
      date,
      ...matterResult.data,
    }
  })
  // 日付の新しい順にソート
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
    .use(html, { sanitize: false }) // sanitize: false を追加 (HTMLタグを保持)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const date = new Date(matterResult.data.date).toISOString().substring(0, 10)

  return {
    slug,
    contentHtml,
    date,
    ...matterResult.data,
  }
}

// SSGに必要なすべてのスラッグを取得
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