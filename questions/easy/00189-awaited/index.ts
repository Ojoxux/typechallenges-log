/*
  189 - Awaited
  -------
  by Maciej Sikora (@maciejsikora) #初級 #promise #built-in

  ### 質問

  Promise ライクな型が内包する型をどのように取得すればよいでしょうか。

  例えば：`Promise<ExampleType>`という型がある場合、どのようにして ExampleType を取得すればよいでしょうか。

  ```ts
  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string
  ```

  > この問題の元記事は [original article](https://dev.to/macsikora/advanced-typescript-exercises-question-1-45k4) by [@maciejsikora](https://github.com/maciejsikora) です。

  > GitHubで確認する：https://tsch.js.org/189/ja
*/

/* _____________ ここにコードを記入 _____________ */

/**
 * メモ
	1.	T extends Promise<infer X> → X = Promise<string>
	2.	X もまた Promise → 再帰する
	3.	最後に string を取得！
 */

/*
type MyAwaited<T> =
  T extends Promise<infer X> ? (X extends Promise<unknown> ? MyAwaited<X> : X) : T;
*/
// 最初の型が PromiseLike であれば、再帰する
export type MyAwaited<T> = T extends PromiseLike<infer U> ? MyAwaited<U> : T;
