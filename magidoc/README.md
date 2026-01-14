GraphQLのドキュメントを生成するnpmパッケージを試すリポジトリです。

## Magidoc検証

このリポジトリでは、GraphQLドキュメント生成ツール「Magidoc」の検証を行っています。

### クイックスタート

```bash
# 依存関係のインストール
npm install

# ドキュメントの生成
npm run docs:build

# 開発サーバーの起動 (HMR有効)
npm run docs:dev

# ビルド済みドキュメントのプレビュー
npm run docs:preview
```

### 生成されたドキュメント

静的サイトは `docs/magidoc/` に生成されます。以下の内容が含まれます:

- GraphQL Query のドキュメント
- GraphQL Mutation のドキュメント
- GraphQL Type のドキュメント  
- カスタムホームページ

詳しい検証結果は [VERIFICATION.md](./VERIFICATION.md) を参照してください。





