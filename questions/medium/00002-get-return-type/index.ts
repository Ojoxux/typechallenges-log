/*
  2 - Get Return Type
  -------
  by Anthony Fu (@antfu) #中級 #infer #built-in

  ### 質問

  組み込みの型ユーティリティ`ReturnType<T>`を使用せず、`T`の戻り値の型を取得する型を実装します。

  例えば

  ```ts
  const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }

  type a = MyReturnType<typeof fn> // should be "1 | 2"
  ```

  > GitHubで確認する：https://tsch.js.org/2/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
