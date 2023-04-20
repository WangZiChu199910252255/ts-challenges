/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-13 15:33:40
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-13 15:48:01
 * @FilePath: /ts-challenges/3192.Reverse.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  3192 - Reverse
  -------
  by jiangshan (@jiangshanmeta) #中等 #tuple

  ### 题目

  实现类型版本的数组反转 ```Array.reverse```

  例如：

  ```typescript
  type a = Reverse<['a', 'b']> // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
  ```

  > 在 Github 上查看：https://tsch.js.org/3192/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Reverse<T> = T extends [infer R,...infer S] ? [...Reverse<S>,R] : []

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]

// type errors = [
//   // @ts-expect-error
//   Reverse<'string'>,
//   // @ts-expect-error
//   Reverse<{ key: 'value' }>,
// ]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/3192/answer/zh-CN
  > 查看解答：https://tsch.js.org/3192/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
//