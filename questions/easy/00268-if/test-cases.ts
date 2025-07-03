import type { Equal, Expect } from '@type-challenges/utils'
import type { MyIf } from './index'

type cases = [
  Expect<Equal<MyIf<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<MyIf<false, 'a', 2>, 2>>,
  Expect<Equal<MyIf<boolean, 'a', 2>, 'a' | 2>>,
]

type error = MyIf<null, 'a', 'b'>

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/268/answer/ja
  > 解答を見る：https://tsch.js.org/268/solutions
  > その他の課題：https://tsch.js.org/ja
*/