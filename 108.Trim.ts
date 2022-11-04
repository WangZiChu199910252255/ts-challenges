/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #中等 #template-literal
  
  ### 题目
  
  实现`Trim<T>`，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
  
  例如
  
  ```ts
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/108/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}` | `${infer Rest}${' ' | '\n' | '\t'}` ? Trim<Rest> : S

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]
