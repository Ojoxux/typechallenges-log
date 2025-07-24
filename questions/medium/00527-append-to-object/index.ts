/*
  527 - Append to object
  -------
  by Andrey Krasovsky (@bre30kra69cs) #中級 #object-keys

  ### 質問

  インターフェースに新しいフィールドを追加する型を実装します。この型は、3 つの引数を受け取り、新しいフィールドを持つオブジェクトを出力しなければなりません。

  例えば、

  ```ts
  type Test = { id: '1' };
  type Result = AppendToObject<Test, 'value', 4>; // expected to be { id: '1', value: 4 }
  ```

  > GitHubで確認する：https://tsch.js.org/527/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};
