import type { MyExclude } from '../../../questions/easy/00043-exclude/index'

type T2 = MyExclude<string | number | boolean, string>;
// T2 の型は？
// type T2 = number | boolean