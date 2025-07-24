# 00003 - omit

## 🤔 詰まったこと

```typescript
[P in keyof T]: P extends K ? never : T[P];
```

- 上のように値をneverにしても意味なくて、キー自体を除外しないといけなかった

## 💡 学んだこと

- AIに聞いたら以下のように型引数に制約をつけるとより型安全らしい

```typescript
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
```

- こうすると、Kは必ずTのキーでないといけなくなるから
