/*
  268 - If
  -------
  by Pavel Glushkov (@pashutk) #初級 #utils

  ### 質問

  条件値`C`、 `C`が truthy である場合の戻り値の型`T`、`C`が falsy である場合の戻り値の型`F`を受け取る`If`を実装します。
  条件値`C` は`true`か`false`のどちらかであることが期待されますが、`T` と `F` は任意の型をとることができます。

  例えば：

  ```ts
  type A = If<true, 'a', 'b'>; // expected to be 'a'
  type B = If<false, 'a', 'b'>; // expected to be 'b'
  ```

  > GitHubで確認する：https://tsch.js.org/268/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type MyIf<C, T, F> = C extends true ? T : F;
