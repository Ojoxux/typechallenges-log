import { Equal, Expect } from "@type-challenges/utils";
import type { First } from "./index";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
];

type errors = [First<"notArray">, First<{ 0: "arrayLike" }>];
