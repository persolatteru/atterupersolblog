---
title: "Next.js & Tailwind CSSでモダンブログをAzure Static Web Appsに無料でホスティングする完全ガイド"
date: "2025-10-01"
excerpt: "本記事では、Next.jsの最新SSG機能とTailwind CSSを活用し、無料のAzure Static Web Appsにリッチなブログをデプロイする手順を完全に解説します。失敗しやすいポイントも網羅。"
---

## 🚀 はじめに

これは、Next.jsとTailwind CSSを使って構築したリッチな静的ブログを、**Azure Static Web Apps (SWA) の無料枠**でデプロイ・公開するための完全な手順ガイドです。

手順通りに進めれば、Gitの競合やCSSの不適用といった問題に直面することなく、高速なモダンブログを立ち上げることができます。

### 記事の構成

1.  プロジェクトの作成と必須設定（SSG、Tailwind）
2.  GitHubへのプッシュとAzure SWAへのデプロイ
3.  デプロイ後のサイト更新方法

---

## 1. プロジェクトの作成と初期設定

### 1-1. Next.jsプロジェクトと依存関係の準備

Next.jsプロジェクトを作成し、ホスティングと記事処理に必要なパッケージをインストールします。

```bash
# Next.jsプロジェクトを作成（Pages Router, No App Routerを推奨）
npx create-next-app@latest my-blog-for-azure 
cd my-blog-for-azure

# Tailwind CSS、Markdown処理、アイコンパッケージをインストール
npm install tailwindcss postcss autoprefixer @tailwindcss/typography gray-matter remark remark-html react-icons

# Tailwind CSSの設定ファイルを作成
npx tailwindcss init -p
```

### 1-2. 必須設定ファイル（Next.jsとTailwind）の修正

安定したデプロイには、以下の3つのファイルが不可欠です。

#### 1. `package.json` の修正 (ビルドコマンド)

Next.jsの最新仕様に合わせ、`next export`を削除し、`next build`のみにします。

```json
// ... scripts 部分のみ ...
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  },
// ...
```

#### 2. `next.config.js` の修正 (SSGと安定化)

静的エクスポート (`output: 'export'`) と、Tailwindのビルド安定化 (`transpilePackages`) を設定します。

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  transpilePackages: ['tailwindcss'], // 安定化
}
module.exports = nextConfig
```

#### 3. `tailwind.config.js` の修正 (プラグイン設定)

Markdown内のコードブロック装飾のため、`@tailwindcss/typography`プラグインを追加します。

```javascript
// ... 省略 ...
  plugins: [
    require('@tailwindcss/typography'), // コードブロック装飾用
  ],
}
```

---

## 2. GitHubへのプッシュとAzure SWAへのデプロイ

### 2-1. GitHubへのプッシュ

プロジェクトにコードファイルが揃ったことを確認し、Gitでコミット、プッシュします。

```bash
# Git初期化とリモート設定は事前に完了している前提
git add .
git commit -m "Final setup before Azure deploy"

# GitHubにプッシュ
git push origin main
```

> **🚨 トラブルシューティング:**
> *   `non-fast-forward`エラーが出たら: `git pull origin main`を実行し、再度`git push origin main`を実行してください。

### 2-2. Azure Static Web Apps リソースの作成（デプロイ）

Azure PortalでSWAリソースを作成します。

1.  **プラン:** **Free**を選択。
2.  **デプロイの詳細:** **GitHub**を連携し、リポジトリを設定。
3.  **ビルドの詳細:**
    *   **ビルド プリセット:** **Next.js**
    *   **アプリの場所:** `/`
    *   **出力場所:** **`out`**

作成後、GitHub Actionsが自動でデプロイを開始し、**数分でサイトが公開されます**。

---

## 3. サイト更新（CI/CDの利用）

一度デプロイが完了すれば、Azure Portalでの操作は不要です。更新はすべてGitで行います。

### サイト更新フロー

1.  **コンテンツ修正:** `posts/`フォルダ内のMarkdownファイルを修正します。
2.  **コミット:** `git commit -m "新しい記事の追加"`
3.  **プッシュ:** `git push origin main`

プッシュ後、自動でデプロイが実行され、サイトが更新されます。