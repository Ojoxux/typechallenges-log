import type { Equal, Expect } from '@type-challenges/utils'
import type { MyPush } from './index'

type cases = [
  Expect<Equal<MyPush<[], 1>, [1]>>,
  Expect<Equal<MyPush<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<MyPush<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]

type errors = [
  // @ts-expect-error
  Expect<Equal<MyPush<number[], string>, string[]>>,
  // @ts-expect-error
  Expect<Equal<MyPush<string[], number>, [string, number]>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3057/answer/ja
  > 解答を見る：https://tsch.js.org/3057/solutions
  > その他の課題：https://tsch.js.org/ja
*/
