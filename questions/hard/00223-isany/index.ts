/*
  223 - IsAny
  -------
  by Pavel Glushkov (@pashutk) #上級 #utils

  ### 質問

  `any`型の値を持っているかを検出することが便利な場合があります。これは、モジュール API で`any`型の値をエクスポート可能なサードーパーティーの TypeScript モジュールを使用する際に
  特に便利です。また、implicitAny チェックを抑制する際に`any`型について知ることは良いことです。

  そこで、型`T`を受け取るユーティリティ型`IsAny<T>`を書いてみましょう。`T`が`any`型であれば`true`を返し、そうでなければ`false`を返します。

  > GitHubで確認する：https://tsch.js.org/223/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type IsAny<T> = 1 extends 0 & T ? true : false;
