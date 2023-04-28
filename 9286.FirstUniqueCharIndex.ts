/*
  9286 - FirstUniqueCharIndex
  -------
  by jiangshan (@jiangshanmeta) #medium #string

  ### Question

  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by [leetcode 387](https://leetcode.com/problems/first-unique-character-in-a-string/))

  > View on GitHub: https://tsch.js.org/9286
*/

/* _____________ Your Code Here _____________ */

type OneByString<T extends string, U extends string, i extends number[] = []> = T extends `${infer S}${infer R}` ? S extends U ? OneByString<R, U, [...i, 0]> : OneByString<R, U, i> : i['length']
type FirstUniqueCharIndex<T extends string,N extends string = T ,i extends string[] = []> = N extends `${infer S}${infer R}` ? OneByString<T, S> extends 1
    ? i['length'] : FirstUniqueCharIndex<T,R,[...i, S]> : -1

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
    Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
    Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
    Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
    Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
    Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9286/answer
  > View solutions: https://tsch.js.org/9286/solutions
  > More Challenges: https://tsch.js.org
*/
