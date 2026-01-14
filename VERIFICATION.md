# Magidocによるドキュメント生成検証

## 概要
Magidocを使用したGraphQLドキュメント生成の検証プロジェクトです。

## 実行した作業

### 1. プロジェクトセットアップ
- ✅ `docs/magidoc/` ディレクトリを作成
- ✅ Magidoc CLIをインストール (`npm install -D @magidoc/cli`)
- ✅ サンプルGraphQLスキーマ (`schema.graphql`) を作成
- ✅ `magidoc.mjs` 設定ファイルを作成
- ✅ `.gitignore` を作成 (node_modules、ビルド成果物を除外)

### 2. 設定ファイル
`magidoc.mjs` で以下を設定:
- スキーマタイプ: SDL形式
- スキーマパス: `schema.graphql`
- テンプレート: `carbon-multi-page`
- 出力先: `docs/magidoc`
- カスタムホームページコンテンツ

### 3. 便利なスクリプト
`package.json` に以下のスクリプトを追加:
```json
"scripts": {
  "docs:dev": "magidoc dev",
  "docs:build": "magidoc generate",
  "docs:preview": "magidoc preview"
}
```

## 検証結果

### ✅ SDLファイルのみで動作するか
**結果: 成功**
- GraphQLスキーマ定義 (SDL形式) のみでドキュメント生成が可能
- Introspectionエンドポイントは不要

### ✅ 静的サイトとしてビルドできるか  
**結果: 成功**
- `npm run docs:build` で静的サイトが生成される
- 生成物は `docs/magidoc/` に出力
- HTML/CSS/JSファイルとして配信可能

### ✅ スキーマ編集時にHMRで即時反映されるか
**結果: 成功 (サーバー起動確認)**
- `magidoc dev` コマンドが正常に起動
- 開発サーバーは http://localhost:3000 でリッスン
- HMR機能が有効で、スキーマファイルの変更を監視
- コマンド: `npm run docs:dev`
- ブラウザでの実際の動作確認はローカル環境で可能

### ✅ UIの見やすさ・使いやすさ
**結果: 良好**
- Carbon Multi-Pageテンプレートを使用
- 生成物の構造:
  - `home.html` - ホームページ
  - `queries/` - クエリのドキュメント
  - `mutations/` - ミューテーションのドキュメント
  - `types/` - 型定義のドキュメント
  - `_app/` - アプリケーションアセット

## 使用方法

### ドキュメントのビルド
```bash
npm run docs:build
```

### 開発モードで起動 (HMR付き)
```bash
npm run docs:dev
```

### ビルド済みドキュメントのプレビュー
```bash
npm run docs:preview
```

## サンプルスキーマ
User と Post という2つの型を含むシンプルなGraphQL APIスキーマを作成:
- Query: users, user, posts, post
- Mutation: createUser, createPost, updateUser, deletePost

## 注意事項
- 日本語コンテンツを使用する場合、エンコーディング関連の問題が発生する可能性があるため、英語での記述を推奨
- `carbon-multi-page` テンプレート以外にも複数のテンプレートが利用可能

## まとめ
Magidocは、SDLファイルのみから美しいGraphQLドキュメントを生成できる優れたツールです。
静的サイトとして出力されるため、GitHub PagesやNetlifyなどでのホスティングも容易です。
