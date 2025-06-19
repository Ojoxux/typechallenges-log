import type { MyExclude } from '../../../questions/easy/00043-exclude/index'

type Obj1 = { type: 'a' };
type Obj2 = { type: 'b' };
type Obj3 = { type: 'c' };

type T3 = MyExclude<Obj1 | Obj2 | Obj3, { type: 'a' }>
// T3 の型は？
// type T3 = Obj2 | Obj3