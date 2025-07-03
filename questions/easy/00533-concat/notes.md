# 00533 - concat

## 🤔 詰まったこと

- `MyConcat` タイプの制約を `any[]` にしていたため、`as const` で作成された readonly 配列を受け入れなかった
- エラーメッセージ「型 'readonly [1]' は制約 'any[]' を満たしていません」が表示され、readonly 配列と通常の配列の違いに気づかなかった

## 💡 学んだこと

- TypeScript では `any[]` と `readonly any[]` は異なる制約である
- `readonly any[]` を使用することで、通常の配列と readonly 配列の両方を受け入れることができる
- `as const` で作成された配列は readonly 配列として扱われるため、より柔軟な型制約が必要
- スプレッド構文 `[...T, ...U]` は readonly 配列でも正しく動作する
