import { Equal, Expect } from "@type-challenges/utils";
import type { MyReadonly } from "./index";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

type ReadonlyTitle1 = MyReadonly<Todo1>;

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
