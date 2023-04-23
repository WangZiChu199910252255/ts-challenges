/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-21 17:01:50
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-23 11:11:31
 * @FilePath: /ts-challenges/4803.TrimRight.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

/*
  4803 - Trim Right
  -------
  by Yugang Cao (@Talljack) #中等 #template-literal

  ### 题目

  实现 `TrimRight<T>` ，它接收确定的字符串类型并返回一个新的字符串，其中新返回的字符串删除了原字符串结尾的空白字符串。

  例如

  ```ts
  type Trimed = TrimRight<'  Hello World  '> // 应推导出 '  Hello World'
  ```

  > 在 Github 上查看：https://tsch.js.org/4803/zh-CN
*/

/* _____________ 你的代码 _____________ */

type ReversalString<T,str extends string = ''> = T extends `${infer R}${infer S}` ? ReversalString<S,`${R}${str}`> : str
type test = ReversalString<' 123 '>
// type TrimRight<S extends string,T extends string = ReversalString<S>,str extends string = '',bol extends boolean = false> = T extends '' ? ReversalString<str> : bol extends true ? 
    // T extends ` ${infer L}` ? TrimRight<S,L,str,false> : TrimRight<S,L,str,true>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4803/answer/zh-CN
  > 查看解答：https://tsch.js.org/4803/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
