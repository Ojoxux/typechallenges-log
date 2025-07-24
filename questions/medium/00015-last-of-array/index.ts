/*
  15 - 配列の最後の要素
  -------
  by Anthony Fu (@antfu) #medium #array

  ### 問題

  > このチャレンジではTypeScript 4.0を推奨します

  配列 `T` を受け取り、その最後の要素を返すジェネリック型 `Last<T>` を実装してください。

  例：

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // 'c' が期待される
  type tail2 = Last<arr2> // 1 が期待される
  ```

  > GitHubで見る: https://tsch.js.org/15
*/

/* _____________ ここにコードを記入 _____________ */

export type Last<T extends any[]> = T extends [...infer _I, infer L]
  ? L
  : never;
