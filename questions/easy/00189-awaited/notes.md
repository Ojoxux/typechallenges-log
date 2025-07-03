# 00189 - Awaited

## 🤔 詰まったこと

- MyAwaited<T>で型エラーが出た
  - 型エラーの原因は、MyAwaited<T>がPromise<T>だけを想定していて、thenメソッドを持つオブジェクト(thenable)を考慮していなかった
  ```typescript
  type T = { then: (onfulfilled: (arg: number) => any) => any };
  type MyAwaited<T> = T extends Promise<infer X> ? ... : ...; // ❌
  ```

## 💡 学んだこと

- Awaiteed<T>はPromiseLike<T>(thenable)にも対応する
- Promise<Promise<...>>のように他中にネストされたPromiseを解決するために、再帰で型展開する必要がある
