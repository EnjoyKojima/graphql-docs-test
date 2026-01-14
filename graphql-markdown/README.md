# GraphQL Markdown POC

`@graphql-markdown/docusaurus` を使用したGraphQLドキュメント生成のPOC。

## セットアップ

```bash
cd graphql-markdown
npm install
```

## ドキュメント生成

```bash
npm run generate
```

## 開発サーバー起動

```bash
npm start
```

http://localhost:3000 でドキュメントを確認できます。

## ビルド

```bash
npm run build
```

## ファイル構成

```
graphql-markdown/
├── schema.graphql        # GraphQLスキーマ
├── docusaurus.config.js  # Docusaurus設定
├── package.json
├── sidebars.js
├── docs/
│   └── api.md            # APIドキュメントのホーム
└── src/css/
    └── custom.css
```
