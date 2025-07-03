import type { Equal, Expect } from '@type-challenges/utils'
import type { MyParameters } from './index'

function foo(arg1: string, arg2: number): void {}
function bar(arg1: boolean, arg2: { a: 'A' }): void {}
function baz(): void {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]

/* _____________ 次のステップ _____________ */
/*
  > 解答を共有する：https://tsch.js.org/3312/answer/ja
  > 解答を見る：https://tsch.js.org/3312/solutions
  > その他の課題：https://tsch.js.org/ja
*/
