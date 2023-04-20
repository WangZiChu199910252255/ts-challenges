/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-20 16:32:36
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-20 18:23:10
 * @FilePath: /ts-challenges/4425.GreaterThan.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */
type Split<S extends string> = S extends `${infer F}${infer R}` ? [F, ...Split<R>] : []
type isSplit<T extends string,K extends string,numArr extends 0[] = []> = numArr['length'] extends Split<T>['length'] ? false :  numArr['length'] extends Split<K>['length'] ? true : isSplit<T,K,[...numArr,0]>
type isNum<T extends string[],K extends string[],i extends number[] = [],index extends number[] = []> = K[i['length']] extends `${index['length']}` ?
         T[i['length']] extends `${index['length']}` ? isNum<T,K,[...i,0],[]> : true : 
         T[i['length']] extends `${index['length']}` ? false : isNum<T,K,i,[...index,0]>
type GreaterThan<T extends number, U extends number> = T extends U ? false : Split<`${T}`>['length'] extends Split<`${U}`>['length'] ? 
isNum<Split<`${T}`>,Split<`${U}`>>
: isSplit<`${T}`,`${U}`>

type test = GreaterThan<1234567891011, 1234567891010>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GreaterThan<1, 0>, true>>,
    Expect<Equal<GreaterThan<5, 4>, true>>,
    Expect<Equal<GreaterThan<4, 5>, false>>,
    Expect<Equal<GreaterThan<0, 0>, false>>,
    Expect<Equal<GreaterThan<10, 9>, true>>,
    Expect<Equal<GreaterThan<20, 20>, false>>,
    Expect<Equal<GreaterThan<10, 100>, false>>,
    Expect<Equal<GreaterThan<111, 11>, true>>,
    Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
