/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #中等 #template-literal
  
  ### 题目
  
  计算字符串的长度，类似于 `String#length` 。
  
  > 在 Github 上查看：https://tsch.js.org/298/zh-CN
*/


/* _____________ 你的代码 _____________ */

type Split<S extends string> = S extends `${infer F}${infer R}` ? [F, ...Split<R>] : []
type LengthOfString<S extends string> = Split<S>['length']

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
