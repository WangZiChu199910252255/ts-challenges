/*
  10969 - 整数
  -------
  by HuaBing (@hbcraft) #中等 #template-literal

  ### 题目

  请完成类型 `Integer<T>`，类型 `T` 继承于 `number`，如果 `T` 是一个整数则返回它，否则返回 `never`。

  > 在 Github 上查看：https://tsch.js.org/10969/zh-CN
*/

/* _____________ 你的代码 _____________ */

type is0<T extends string> = T extends `0` ? true : T extends `0${infer R}` ? is0<R> : false

type Integer<T extends number> = Equal<T,number> extends true ? never : `${T}` extends `${infer R}.${infer S}` ? is0<S> extends true ? R : never  : T
type test = Integer<1.1>
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.000000000>, 1>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/10969/answer/zh-CN
  > 查看解答：https://tsch.js.org/10969/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
