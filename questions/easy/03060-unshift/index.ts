/*
  3060 - Unshift
  -------
  by jiangshan (@jiangshanmeta) #初級 #array

  ### 質問

  ```Array.unshift```の型バージョンを実装します。

  例えば：

  ```typescript
  type Result = Unshift<[1, 2], 0> // [0, 1, 2]
  ```

  > GitHubで確認する：https://tsch.js.org/3060/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type MyUnshift<T extends unknown[], U> = [U, ...T]