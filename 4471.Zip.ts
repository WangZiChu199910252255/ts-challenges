/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-21 10:27:47
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-21 11:09:08
 * @FilePath: /ts-challenges/4471.Zip.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  4471 - Zip
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple

  ### Question

  In This Challenge, You should implement a type `Zip<T, U>`, T and U must be `Tuple`
  ```ts
  type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  ```

  > View on GitHub: https://tsch.js.org/4471
*/

/* _____________ Your Code Here _____________ */

type Zip<T extends unknown[], U extends unknown[], i extends 0[] = [],arr extends [unknown,unknown][] = []> =  i['length'] extends T['length'] | U['length'] ? arr : Zip<T,U,[...i,0],[...arr,[T[i['length']],U[i['length']]]]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4471/answer
  > View solutions: https://tsch.js.org/4471/solutions
  > More Challenges: https://tsch.js.org
*/
