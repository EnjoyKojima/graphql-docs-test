# Docusaurus GraphQL Documentation

このプロジェクトは、@graphql-markdown/docusaurus を使用して GraphQL スキーマから自動的にドキュメントを生成する Docusaurus サイトです。

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## セットアップ / Installation

```bash
npm install
# or
yarn
```

## GraphQL ドキュメントの生成

GraphQL スキーマからドキュメントを生成:

```bash
npm run graphql:generate
# or
npx docusaurus graphql-to-doc
```

## Local Development

```bash
npm start
# or
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

ブラウザで http://localhost:3000 を開いてください。GraphQL API ドキュメントは `/docs/graphql` で閲覧できます。

## Build

```bash
npm run build
# or
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## プロジェクト構成

```
.
├── schema/
│   └── schema.graphql      # GraphQL スキーマ定義
├── docs/
│   ├── graphql/           # 自動生成されたドキュメント
│   └── ...                # その他のドキュメント
├── .graphqlrc.yml         # GraphQL 設定（重要！）
├── docusaurus.config.js   # Docusaurus 設定
└── VALIDATION_RESULTS.md  # 検証結果
```

## 重要な設定

### .graphqlrc.yml

GraphQL ドキュメント生成には `.graphqlrc.yml` が必要です:

```yaml
schema: ./schema/schema.graphql
documents: null
extensions:
  graphql-markdown:
    rootPath: ./docs
    baseURL: graphql
    linkRoot: /docs
    loaders:
      GraphQLFileLoader: '@graphql-tools/graphql-file-loader'
```

**注意**: `loaders` セクションは必須です。

## GraphQL スキーマの更新手順

1. `schema/schema.graphql` を編集
2. `npm run graphql:generate` を実行
3. 生成されたドキュメントを確認（`docs/graphql/` 配下）

## 検証結果

詳細な検証結果は [VALIDATION_RESULTS.md](./VALIDATION_RESULTS.md) を参照してください。

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## ドキュメント

- [Docusaurus 公式ドキュメント](https://docusaurus.io/)
- [@graphql-markdown/docusaurus](https://www.npmjs.com/package/@graphql-markdown/docusaurus)

