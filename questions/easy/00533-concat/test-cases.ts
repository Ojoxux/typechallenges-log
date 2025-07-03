import type { Equal, Expect } from '@type-challenges/utils'
import type { MyConcat } from './index'

const tuple = [1] as const

type cases = [
  Expect<Equal<MyConcat<[], []>, []>>,
  Expect<Equal<MyConcat<[], [1]>, [1]>>,
  Expect<Equal<MyConcat<typeof tuple, typeof tuple>, [1, 1]>>,
  Expect<Equal<MyConcat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<MyConcat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

// @ts-expect-error
type error = MyConcat<null, undefined>

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/533/answer/ja
  > 解答を見る：https://tsch.js.org/533/solutions
  > その他の課題：https://tsch.js.org/ja
*/
