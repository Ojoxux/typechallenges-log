/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #中級 #union #built-in

  ### 質問

  組み込みの型ユーティリティ`Omit<T, K>`を使用せず、`T`のプロパティから`K`を削除する型を実装します。

  例えば

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```

  > GitHubで確認する：https://tsch.js.org/3/ja
*/

/* _____________ ここにコードを記入 _____________ */

export type MyOmit<T, K> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
