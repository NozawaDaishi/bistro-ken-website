# bistro-ken-website 開発ガイドライン

## フロントエンドの技術構成

- **フレームワーク**: Vue.js (バージョン 3.3.4)
- **画面遷移**: vue-router
- **状態管理**: Pinia
- **国際化対応**: vue-i18n
- **HTTPクライアント**: axios
- **CSSプリプロセッサ**: Sass
- **ビルドツール**: Vite

## 環境セットアップ

プロジェクトの依存関係をインストールします。

```bash
npm install

# 開発サーバーを起動
npm run dev

# ビルドコマンド
npm run build

# ビルドしたアプリをプレビュー
npm run preview

# コードのリントを行い修正を試みる
npm run lint

# コードフォーマットを整える
npm run format

## コーディング規約

### UIコンポーネント
- `script setup` 使用を推奨
- `.vue` ファイルの記載順序は、`<script setup>`, `<template>`, `<style>` の順
- TypeScript使用時は `lang="ts"` 属性を指定
- CSSは `lang="scss"` と `module` 属性を使用

### ページコンポーネント (`pages`)
- 画面遷移の対象となるコンポーネントを格納

### テンプレートコンポーネント (`templates`)
- `components` フォルダ内のコンポーネントを組み合わせて作成

### コンポーネント (`components`)
- 再利用可能なUIパーツを作成

### 状態管理
- 状態は `.vue` ファイルではなく、Pinia stores または composables で管理

#### ストア (`stores`)
- UI状態は `state` で管理し、`actions` と `getters` はJSDocを付与

#### Composables
- `store` で管理できない状態は `composables` で管理
- 関数は `export default function` でエクスポート

### スタイルと命名規則
- TypeScriptでは `any` 型や `as` キャスティングを避ける
- クラス名は `snake_case` または意味のある一単語では `lowerCamelCase` を使用
```
