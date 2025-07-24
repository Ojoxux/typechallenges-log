/*
  106 - Trim Left
  -------
  by Anthony Fu (@antfu) #中級 #template-literal

  ### 質問

  文字列を受け取り、先頭の空白を削除した新しい文字列を返す `TrimLeft<T>` を実装します。

  例えば

  ```ts
  type trimmed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
  ```

  > GitHubで確認する：https://tsch.js.org/106/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type TrimLeft<S extends string> =
  S extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R> : S;
