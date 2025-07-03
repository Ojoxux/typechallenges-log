import type { Equal, Expect } from '@type-challenges/utils'
import type { MyUnshift } from './index'

type cases = [
  Expect<Equal<MyUnshift<[], 1>, [1]>>,
  Expect<Equal<MyUnshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<MyUnshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3060/answer/ja
  > 解答を見る：https://tsch.js.org/3060/solutions
  > その他の課題：https://tsch.js.org/ja
*/
