# 03057 - push

## 🤔 詰まったこと
- MyPush<T, U>で`rest要素型は配列型である必要がある`というエラーが出た
  - これは、`T`が`T extends unknown[]`という制約を持っているため、`T`が配列型であることを確認するためのエラー
  ```ts
  type MyPush<T, U> = [...T, U]
  ```
  - このエラーを回避するために、`T`を`T extends unknown[]`という制約を持つ配列型にする必要がある
  ```ts
  type MyPush<T extends unknown[], U> = [...T, U]
  ```

## 💡 学んだこと
- 配列型の制約を持つ型を作成する場合は、`T extends unknown[]`という制約を持つ配列型にする必要がある
> any[] → unknown[]
