/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #中等 #math
  
  ### 题目
  
  给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。
  
  例如:
  
  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```
  
  > 在 Github 上查看：https://tsch.js.org/2257/zh-CN
*/


/* _____________ 你的代码 _____________ */

type num = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type TestMinusOne<T extends number,U extends any[] = []> = [1,...U]['length'] extends T ? U['length'] : TestMinusOne<T,[1,...U]> 
type MinusOne<T extends number> = 
`${T}` extends `${infer R extends number}${infer F}` ? 
      F extends '' ? TestMinusOne<R> 
    : F extends `${infer N extends number}` ? N extends num ? IntString<`${R}${TestMinusOne<N>}`> : IntString<`${R}${MinusOne<N>}`> : T : T
type IntString<T extends string> = T extends `${infer N extends number}` ? N : T
type N = MinusOne<1172>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<1357>, 1356>>,
  Expect<Equal<MinusOne<1172>, 1171>>,
]