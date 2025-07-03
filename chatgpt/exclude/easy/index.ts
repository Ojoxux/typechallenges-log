import type { MyExclude } from "../../../questions/easy/00043-exclude/index";

type T1 = MyExclude<1 | 2 | 3 | 4, 2 | 4>;
// T1 の型は？
// type T1 = 1, 3
