# GraphQL Docs Test

GraphQLのドキュメントを生成するnpmパッケージを比較検証するリポジトリです。

## 構成

3つのドキュメント生成ツールを同一の `schema.graphql` で比較できます。

| ツール | ポート | 説明 |
|--------|--------|------|
| [graphql-markdown](https://graphql-markdown.dev/) | 3001 | Docusaurusベースのドキュメント生成 |
| [magidoc](https://magidoc.js.org/) | 3002 | モダンなUIのドキュメント生成 |
| [spectaql](https://github.com/anvilco/spectaql) | 3003 | シンプルなHTMLドキュメント生成 |

## セットアップ

```bash
npm install
```

## 開発

3つのプレビューサーバーを同時に起動:

```bash
npm run dev
```

## プロジェクト構造

```
.
├── schema.graphql        # 共通スキーマファイル
├── graphql-markdown/     # graphql-markdown設定
├── magidoc/              # magidoc設定
├── spectaql/             # spectaql設定
├── package.json          # ワークスペース設定
└── turbo.json            # turborepo設定
```