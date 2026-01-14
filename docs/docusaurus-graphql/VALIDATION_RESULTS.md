# @graphql-markdown/docusaurus 検証結果

## 概要
このドキュメントは、@graphql-markdown/docusaurus を使用した GraphQL ドキュメント生成の検証結果をまとめたものです。

## 実施内容

### 1. プロジェクト構成
- **ディレクトリ**: `docs/docusaurus-graphql/`
- **Docusaurus バージョン**: 3.9.2
- **プラグインバージョン**: @graphql-markdown/docusaurus ^1.30.3
- **Node.js バージョン**: v20.19.6

### 2. セットアップ手順

#### 2.1 Docusaurus プロジェクトの初期化
```bash
npx create-docusaurus@latest docusaurus-graphql classic --typescript
```

#### 2.2 必要なパッケージのインストール
```bash
npm install @graphql-markdown/docusaurus graphql
```

既存の依存関係に以下が自動的にインストールされました：
- graphql-config
- @graphql-tools/load
- @graphql-tools/graphql-file-loader

#### 2.3 GraphQL スキーマファイルの作成
`schema/schema.graphql` にサンプルスキーマを作成:
- User型（ユーザー情報）
- Post型（ブログ投稿）
- Query型（クエリ操作）
- Mutation型（変更操作）
- 各種Input型

#### 2.4 設定ファイル

**重要な発見**: プラグインを動作させるには `.graphqlrc.yml` が必要です。

`.graphqlrc.yml`:
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

**キーポイント**: `loaders` セクションの明示的な指定が必須でした。これがないと、「GraphQL loader のロードエラー」が発生します。

`docusaurus.config.js`:
```javascript
plugins: [
  [
    '@graphql-markdown/docusaurus',
    {
      schema: './schema/schema.graphql',
      rootPath: './docs',
      baseURL: 'graphql',
    },
  ],
],
```

### 3. ドキュメント生成

#### 3.1 生成コマンド
```bash
npx docusaurus graphql-to-doc
```

#### 3.2 生成結果
- **総ページ数**: 22 MDX ページ
- **生成時間**: 0.058秒
- **出力先**: `docs/graphql/`

#### 3.3 生成されたコンテンツ
```
docs/graphql/
├── generated.md              # ランディングページ
├── operations/              # 操作関連
│   ├── directives/         # @skip, @include
│   ├── mutations/          # 5つのミューテーション
│   └── queries/            # 4つのクエリ
└── types/                  # 型定義
    ├── directives/         # @deprecated, @oneOf, @specifiedBy
    ├── inputs/             # 3つの入力型
    ├── objects/            # User, Post
    └── scalars/            # ID, String, Boolean
```

### 4. 開発サーバーでの動作確認

#### 4.1 起動
```bash
npm start
```

#### 4.2 確認内容
- ✅ サーバーが正常に起動（http://localhost:3000/）
- ✅ ナビゲーションに「GraphQL API」リンクが表示
- ✅ サイドバーに生成されたドキュメント構造が表示
- ✅ 型定義ページに詳細な情報が表示
- ✅ 相互リンクが正しく機能
- ✅ コードブロックのシンタックスハイライトが動作

### 5. 静的サイト生成

#### 5.1 ビルドコマンド
```bash
npm run build
```

#### 5.2 ビルド結果
- ✅ ビルド成功
- **生成されたHTMLページ**: 23ページ
- **ビルド時間**: 約33秒
- **出力先**: `build/`

## 検証ポイントの評価

### ✅ SDLファイルのみで動作するか
**結果**: **完全に動作**

- SDL（Schema Definition Language）ファイルのみで全てのドキュメントが生成可能
- introspection クエリや実行中のサーバーは不要
- `.graphqlrc.yml` に適切な loader 設定が必要

### ✅ Docusaurus との統合のしやすさ
**結果**: **非常に良好**

**メリット**:
- Docusaurus プロジェクトへの統合が簡単
- 既存のドキュメントと自然に共存
- ナビゲーションとサイドバーが自動生成
- テーマとスタイルが統一される

**注意点**:
- `.graphqlrc.yml` での loader 設定が必須
- 初回セットアップ時にエラーメッセージが不明瞭

### ✅ 生成される Markdown の品質
**結果**: **高品質**

**特徴**:
- MDX 形式で React コンポーネントを含む
- インタラクティブな要素（折りたたみ可能なセクション等）
- 適切なメタデータ（フロントマター）
- コードブロックのシンタックスハイライト
- 型間の相互リンク
- バッジによる視覚的な情報表示（non-null, scalar, object 等）

**生成される情報**:
- 型の説明とフィールド定義
- フィールドの型と説明
- 「Returned By」（どのクエリ/ミューテーションで返されるか）
- 「Member Of」（どの型のメンバーか）
- GraphQL コードスニペット

### ✅ 既存ドキュメントとの共存
**結果**: **完全に共存可能**

- 既存の Docusaurus ドキュメント（Tutorial）と並存
- サイドバーで区別して表示
- URL パスが明確に分離（`/docs/graphql/...`）
- ビルドやナビゲーションに干渉なし

## 推奨設定

### package.json にスクリプトを追加
```json
{
  "scripts": {
    "graphql:generate": "docusaurus graphql-to-doc"
  }
}
```

### ナビゲーションバーの設定
```javascript
navbar: {
  items: [
    {
      to: '/docs/graphql',
      label: 'GraphQL API',
      position: 'left',
    },
  ],
}
```

## トラブルシューティング

### エラー: "An error occurred while loading GraphQL loader"

**原因**: `.graphqlrc.yml` に loader 設定がない

**解決方法**: 以下を追加
```yaml
loaders:
  GraphQLFileLoader: '@graphql-tools/graphql-file-loader'
```

## 結論

@graphql-markdown/docusaurus は、**GraphQL スキーマから高品質なドキュメントを生成する優れたツール**です。

### 主な利点
1. SDL ファイルのみで完全に動作
2. Docusaurus との統合が容易
3. 生成されるドキュメントの品質が高い
4. 既存ドキュメントとの共存が可能
5. 自動生成により、スキーマとドキュメントの同期が保たれる

### 注意点
1. `.graphqlrc.yml` での loader 設定が必須
2. 初回セットアップ時にドキュメントの参照が必要
3. スキーマが大きい場合、生成時間が長くなる可能性

### 推奨度
**★★★★★ (5/5)**

本番環境での使用を強く推奨します。
