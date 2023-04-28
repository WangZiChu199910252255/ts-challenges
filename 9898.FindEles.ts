
/*
  9898 - 找出目标数组中只出现过一次的元素
  -------
  by X.Q. Chen (@brenner8023) #中等

  ### 题目

  找出目标数组中只出现过一次的元素。例如：输入[1,2,2,3,3,4,5,6,6,6]，输出[1,4,5]

  > 在 Github 上查看：https://tsch.js.org/9898/zh-CN
*/

/* _____________ 你的代码 _____________ */

type NumForArr<T extends any[],num extends any,NewT extends any[] = [],i extends number[] = []> = T extends [infer R,...infer S] ? R extends num ? NumForArr<S,num,NewT,[...i,0]> : NumForArr<S,num,[...NewT,R],i> : [NewT,i['length']]
type FindEles<T extends any[],newT extends any[] = []> = T extends [] ? newT : NumForArr<T,T[0]> extends [infer R extends any[] ,infer num] ? num extends 1 ? FindEles<R,[...newT,T[0]]> : FindEles<R,newT> : never
type test = FindEles<[1,2,3,4,2]
>
/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
import { ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/9898/answer/zh-CN
  > 查看解答：https://tsch.js.org/9898/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
