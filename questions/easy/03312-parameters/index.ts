/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #初級 #infer #tuple #built-in

  ### 質問

  組み込みの型ユーティリティ`Parameters<T>`を使用せず、`T`からタプル型を構築する型を実装します。

  例えば：

  ```ts
  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```

  > GitHubで確認する：https://tsch.js.org/3312/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer U) => any ? U : never