/*
  898 - Includes
  -------
  by null (@kynefuk) #初級 #array

  ### 質問

  JavaScriptの`Array.include`関数を型システムに実装します。この型は、2 つの引数を受け取り、`true`や`false`を出力しなければなりません。

  例えば：

  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```

  > GitHubで確認する：https://tsch.js.org/898/ja
*/

/* _____________ ここにコードを記入 _____________ */

import type { Equal } from '@type-challenges/utils';

export type MyIncludes<T extends readonly any[], U> = T extends readonly [infer H, ...infer R]
  ? Equal<H, U> extends true
    ? true
    : MyIncludes<R, U>
  : false;
