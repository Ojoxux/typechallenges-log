/*
  18142 - All
  -------
  by cutefcc (@cutefcc) #medium #array

  ### Question

  Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.

  For example

  ```ts
  type Test1 = [1, 1, 1]
  type Test2 = [1, 1, 2]

  type Todo = All<Test1, 1> // should be same as true
  type Todo2 = All<Test2, 1> // should be same as false
  ```

  > View on GitHub: https://tsch.js.org/18142
*/

/* _____________ Your Code Here _____________ */

import type { Equal } from '@type-challenges/utils';

export type All<T, U> = T extends [infer F, ...infer R]
  ? Equal<U, F> extends true
    ? All<R, U>
    : false
  : true;
