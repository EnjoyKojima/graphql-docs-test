# GraphQL Documentation Tools - 検証リポジトリ

GraphQLのドキュメントを生成するnpmパッケージを試すリポジトリです。

---

## SpectaQL Documentation Generation - 検証レポート

SpectaQLを使用したGraphQLドキュメント生成の検証を行いました。

### 概要

SpectaQLは、GraphQLスキーマから美しい静的ドキュメントを生成するツールです。
このプロジェクトでは、SDLファイルのみを使用してドキュメントを生成し、開発体験を検証しました。

![SpectaQL Documentation](https://github.com/user-attachments/assets/01939854-d23e-44b9-a07a-d03a9aa16ba7)

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

これにより、SpectaQL（v3.0.6）がdevDependencyとしてインストールされます。

### 2. ディレクトリ構成

```
.
├── schema.graphql          # GraphQL SDL スキーマ定義
├── spectaql.yaml           # SpectaQL 設定ファイル
├── docs/
│   └── spectaql/
│       └── public/         # 生成された静的サイト（.gitignore対象）
├── package.json
└── README.md
```

## 使い方

### プレビューモード（開発モード）

ファイル監視とライブリロードで開発サーバーを起動：

```bash
npm run docs:spectaql:preview
```

- サーバーはデフォルトで http://localhost:4400 で起動
- ファイル変更を監視し、自動的に再ビルド
- ライブリロード対応

### 静的サイトのビルド

本番用の静的HTMLを生成：

```bash
npm run docs:spectaql:build
```

生成されたファイルは `docs/spectaql/public/` に出力されます。

## スキーマファイル

`schema.graphql` には以下のサンプルスキーマが定義されています：

- **Query操作**
  - `user(id: ID!)`: ユーザー取得
  - `users(limit: Int, offset: Int)`: ユーザー一覧
  - `post(id: ID!)`: 投稿取得
  - `posts(authorId: ID, limit: Int)`: 投稿一覧

- **Mutation操作**
  - `createUser(input: CreateUserInput!)`: ユーザー作成
  - `updateUser(id: ID!, input: UpdateUserInput!)`: ユーザー更新
  - `deleteUser(id: ID!)`: ユーザー削除
  - `createPost(input: CreatePostInput!)`: 投稿作成

- **型定義**
  - `User`: ユーザー情報
  - `Post`: 投稿情報
  - `UserRole`: ユーザーロール（ADMIN, USER, GUEST）
  - `DateTime`: カスタムスカラー型

## 設定ファイル（spectaql.yaml）

主要な設定項目：

```yaml
spectaql:
  targetDir: ./docs/spectaql/public  # 出力ディレクトリ

introspection:
  schemaFile: ./schema.graphql        # SDLファイルパス

servers:
  - url: https://api.example.com/graphql
    description: Production API
  - url: http://localhost:4000/graphql
    description: Development API

info:
  title: GraphQL API Documentation
  description: |
    APIの説明文（Markdown対応）
  version: 1.0.0

options:
  themeColor: '#0066cc'               # テーマカラー
  displayAllServers: true             # 全サーバー表示
```

## 検証結果

### ✅ 成功した機能

1. **SDLファイルのみでの動作**
   - Introspectionクエリ不要
   - `schema.graphql` から直接ドキュメント生成可能

2. **開発体験**
   - ✅ ファイル監視機能
   - ✅ 自動リビルド
   - ✅ ライブリロード（`-D`オプション使用時）
   - ✅ 高速なビルド処理

3. **静的サイト生成**
   - ✅ 単一HTMLファイルとして出力可能
   - ✅ CSS/JSも含めて完全な静的サイト
   - ✅ GitHubPages等での公開に対応

4. **ドキュメント品質**
   - ✅ 美しいUIデザイン
   - ✅ レスポンシブデザイン
   - ✅ サイドバーナビゲーション
   - ✅ 構文ハイライト
   - ✅ サンプルクエリ/レスポンス自動生成
   - ✅ 型定義の相互参照リンク

### 📝 その他の特徴

- **コメント対応**: SDL内のドキュメントコメント（`"""`）が反映される
- **Markdown対応**: 説明文でMarkdown記法が使用可能
- **カスタマイズ性**: テーマカラー、ロゴ、複数サーバー設定など柔軟にカスタマイズ可能
- **Example生成**: 全てのQuery/Mutationに対して自動的にサンプルコードを生成

### ⚠️ 注意点

1. Sass deprecation警告が表示されますが、動作に影響はありません
2. `@spectaql`ディレクティブの詳細な検証は今回未実施（基本機能で十分）
3. node_modulesと生成ファイルは`.gitignore`に追加済み

## まとめ

SpectaQLは以下の用途に最適です：

- ✅ SDLベースのGraphQLプロジェクト
- ✅ 静的ドキュメントサイトが必要なプロジェクト
- ✅ CI/CDでの自動ドキュメント生成
- ✅ GitHubPages等でのドキュメント公開

### 推奨される使用シーン

- 社内APIドキュメント
- 外部パートナー向けAPI仕様書
- オープンソースプロジェクトのAPI Reference
- GraphQLスキーマの可視化・レビュー

## 参考リンク

- [SpectaQL GitHub](https://github.com/anvilco/spectaql)
- [SpectaQL Documentation](https://github.com/anvilco/spectaql#readme)

