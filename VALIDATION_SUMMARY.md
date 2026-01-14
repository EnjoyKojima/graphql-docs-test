# GraphQL Documentation Generation - Validation Summary

このリポジトリでは、GraphQL スキーマから自動的にドキュメントを生成する各種ツールの検証を行っています。

## @graphql-markdown/docusaurus 検証完了 ✅

### プロジェクト場所
`docs/docusaurus-graphql/`

### 検証結果
**推奨度: ★★★★★ (5/5) - 本番環境での使用を強く推奨**

### 主な特徴
- ✅ SDL（GraphQL Schema Definition Language）ファイルのみで動作
- ✅ Docusaurus との優れた統合
- ✅ 高品質でインタラクティブなドキュメント生成
- ✅ 既存ドキュメントとの完全な共存
- ✅ 自動生成により、スキーマとドキュメントが常に同期

### 生成されたドキュメント
- **総ページ数**: 22 MDX ページ
- **生成時間**: 0.058秒
- **内容**: 
  - Objects (User, Post)
  - Queries (user, users, post, posts)
  - Mutations (createUser, createPost, updatePost, deletePost, publishPost)
  - Input types
  - Scalars
  - Directives

### セットアップの要点

必須設定ファイル `.graphqlrc.yml`:
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

**重要**: `loaders` セクションの明示的な指定が必須です。

### 詳細ドキュメント
詳細な検証結果は以下を参照:
- [docs/docusaurus-graphql/VALIDATION_RESULTS.md](docs/docusaurus-graphql/VALIDATION_RESULTS.md)
- [docs/docusaurus-graphql/README.md](docs/docusaurus-graphql/README.md)

### スクリーンショット

**ホームページ:**
![Homepage](https://github.com/user-attachments/assets/1484bc75-c618-4f8c-993f-e54e7ce3df05)

**GraphQL API ドキュメント:**
![GraphQL API](https://github.com/user-attachments/assets/fd75aa75-f92c-4a9e-9a88-3609ee321444)

**型の詳細ドキュメント:**
![User Type](https://github.com/user-attachments/assets/1e553f0a-fc12-4d16-9834-324881347664)

### 使用方法

```bash
# ディレクトリに移動
cd docs/docusaurus-graphql

# 依存関係のインストール
npm install

# GraphQL ドキュメント生成
npm run graphql:generate

# 開発サーバー起動
npm start

# 静的サイトビルド
npm run build
```

### 結論
@graphql-markdown/docusaurus は、GraphQL API ドキュメントの生成に最適なツールです。SDL ファイルのみで高品質なドキュメントを自動生成でき、Docusaurus との統合も非常にスムーズです。本番環境での使用を強く推奨します。
