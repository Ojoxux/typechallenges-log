/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #中級 #template-literal

  ### 質問

  キャメルケースもしくはパスカルケースの文字列を、ケバブケースに置換する型を実装します。

  `FooBarBaz` -> `foo-bar-baz`

  例えば

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">;
  const foobarbaz: FooBarBaz = "foo-bar-baz";

  type DoNothing = KebabCase<"do-nothing">;
  const doNothing: DoNothing = "do-nothing";
  ```

  > GitHubで確認する：https://tsch.js.org/612/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type KebabCase<S> = S extends `${infer F}${infer R}`
  ? R extends `${Uppercase}${string}`
    ? `${Lowercase<F>}-${KebabCase<R>}`
    : `${Lowercase<F>}${KebabCase<R>}`
  : S;

type Uppercase =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';
