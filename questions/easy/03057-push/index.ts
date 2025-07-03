/*
  3057 - Push
  -------
  by jiangshan (@jiangshanmeta) #初級 #array

  ### 質問

  ```Array.push```のジェネリックバージョンを実装します。

  例えば：

  ```typescript
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
  ```

  > GitHubで確認する：https://tsch.js.org/3057/ja
*/

/* _____________ ここにコードを記入 _____________ */


// 思考メモ
// 配列Tの末尾に要素Uを追加する型
// スプレッド構文 [...T, U] を使って、既存の配列の全要素を展開 & 最後に新しい要素Uを追加
// ex: MyPush<[1, 2], '3'> → [1, 2, '3']

export type MyPush<T extends unknown[], U> = [...T, U]
