/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #中等 #template-literal
  
  ### 题目
  
  实现 `ReplaceAll<S, From, To>` 将一个字符串 `S` 中的所有子字符串 `From` 替换为 `To`。
  
  例如
  
  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
  ```
  
  > 在 Github 上查看：https://tsch.js.org/119/zh-CN
*/


/* _____________ 你的代码 _____________ */

type ReplaceAll<S extends string, From extends string, To extends string> = 
  From extends '' ? S : S extends `${infer R}${From}${infer N}` ? `${R}${To}${ReplaceAll<N,From, To>}` : S


/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]
