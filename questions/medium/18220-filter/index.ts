/*
  18220 - Filter
  -------
  by Muhun Kim (@x86chi) #medium #array #filter

  ### Question

  Implement the type `Filter<T, Predicate>` takes an Array `T`, primitive type or union primitive type `Predicate` and returns an Array include the elements of `Predicate`.

  > View on GitHub: https://tsch.js.org/18220
*/

/* _____________ Your Code Here _____________ */

export type Filter<T extends unknown[], P> = T extends [infer F, ...infer L]
  ? F extends P
    ? [F, ...Filter<L, P>]
    : Filter<L, P>
  : [];
