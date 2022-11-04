/*
  106 - Trim Left
  -------
  by Anthony Fu (@antfu) #中等 #template-literal
  
  ### 题目
  
  实现 `TrimLeft<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串开头的空白字符串。
  
  例如
  
  ```ts
  type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '
  ```
  
  > 在 Github 上查看：https://tsch.js.org/106/zh-CN
*/


/* _____________ 你的代码 _____________ */

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Rest}` ? TrimLeft<Rest> : S
type s = TrimLeft<' str'>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]
