/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #中級 #template-literal

  ### 質問

  文字列を受け取り、両端の空白を削除した新しい文字列を返す `Trim<T>` を実装します。

  例えば

  ```ts
  type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```

  > GitHubで確認する：https://tsch.js.org/108/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type Trim<S extends string> = S extends
  | `${' ' | '\n' | '\t'}${infer R}`
  | `${infer R}${' ' | '\n' | '\t'}`
  ? Trim<R>
  : S;
