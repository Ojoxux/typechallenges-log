import type { Equal, Expect } from '@type-challenges/utils'
import type { MyIncludes } from './index'

type cases = [
  Expect<Equal<MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<MyIncludes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<MyIncludes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<MyIncludes<[1, 2, 3], 2>, true>>,
  Expect<Equal<MyIncludes<[1, 2, 3], 1>, true>>,
  Expect<Equal<MyIncludes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<MyIncludes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<MyIncludes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<MyIncludes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<MyIncludes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<MyIncludes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<MyIncludes<[1], 1 | 2>, false>>,
  Expect<Equal<MyIncludes<[1 | 2], 1>, false>>,
  Expect<Equal<MyIncludes<[null], undefined>, false>>,
  Expect<Equal<MyIncludes<[undefined], null>, false>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/898/answer/ja
  > 解答を見る：https://tsch.js.org/898/solutions
  > その他の課題：https://tsch.js.org/ja
*/
