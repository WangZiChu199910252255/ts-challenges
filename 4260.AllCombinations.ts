/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-19 17:37:17
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-20 16:29:53
 * @FilePath: /ts-challenges/4260.AllCombinations.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  4260 - AllCombinations
  -------
  by 蛭子屋双六 (@sugoroku-y) #medium #template-literal #infer #union

  ### Question

  Implement type ```AllCombinations<S>``` that return all combinations of strings which use characters from ```S``` at most once.

  For example:

  ```ts
  type AllCombinations_ABC = AllCombinations<'ABC'>;
  // should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
  ```

  > View on GitHub: https://tsch.js.org/4260
*/

/* _____________ Your Code Here _____________ */

function getAllPermutations(arr: string[]): string[] {
  const result = [''];

  for (let i = 0; i < arr.length; i++) {
    const temp = [];
    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < arr[i].length + 1; k++) {
        temp.push(result[j].slice(0, k) + arr[i] + result[j].slice(k));
      }
    }
    result.push(...temp);
  }

  return result;
}

type StringToArray<T extends string,stringArray extends string[] = []> = T extends `${infer R}${infer S}` ? StringToArray<S,[...stringArray,R]> : stringArray
type isEnd<T extends string,start extends number,end extends number, str extends string, strArr extends 0[], bool extends boolean> = any
type StringSlice<T extends string,start extends number,end extends number = StringToArray<T>['length'], str extends string = '', strArr extends 0[] = [], bool extends boolean = false> = 
  StringToArray<T> extends strArr['length'] ? str : bool extends false ? strArr['length'] extends start ? StringSlice<T,start,end,`${str}${ StringToArray<T>[strArr['length']]}`,[...strArr,0],true> : 
  StringSlice<T,start,end,`${str}`,[...strArr,0],false> 
  : strArr['length'] extends end ?  StringSlice<T,start,end,`${str}`,[...strArr,0],false> : StringSlice<T,start,end,`${str}${ StringToArray<T>[strArr['length']]}`,[...strArr,0],true>

// type test2 = StringSlice<'123',1>
// type getAllPermutations<arr extends string[],returnArr extends string[] = [''] , tempArr extends string[] = [],j extends 0[] = [],k extends 1[] = [],i extends 2[] = []> = 
//   arr['length'] extends i['length'] ? returnArr : returnArr['length'] extends j['length'] ? getAllPermutations<arr,[...returnArr,...tempArr],[],[],[],[...i,2]> : 
//   StringToArray<arr[i['length']]>['length'] extends k['length'] ? getAllPermutations<arr,returnArr,tempArr,[...j,0],[],i> : getAllPermutations<arr,returnArr,[...tempArr,returnArr[j['length']]],j,[...k,1],i>
// // type test1 = TuplePermute<['a', 'c', 'b']>
// type StringToUnion<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S
// type itemArray<T, arr extends Array<string> = []> = T extends `${infer R}${infer S}` ? itemArray<S, [...arr, R]> : ["", ...arr]
// type itemObj<T extends string[]> = { [k in T[number]]: k }
// type AllCombinations<T> = itemObj<itemArray<T>>[keyof itemObj<itemArray<T>>]
// type test = TuplePermute<itemArray<'ABC'>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

// type cases = [
//   Expect<Equal<AllCombinations<''>, ''>>,
//   Expect<Equal<AllCombinations<'A'>, '' | 'A'>>,
//   Expect<Equal<AllCombinations<'AB'>, '' | 'A' | 'B' | 'AB' | 'BA'>>,
//   Expect<Equal<AllCombinations<'ABC'>, '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'>>,
//   Expect<Equal<AllCombinations<'ABCD'>, '' | 'A' | 'B' | 'C' | 'D' | 'AB' | 'AC' | 'AD' | 'BA' | 'BC' | 'BD' | 'CA' | 'CB' | 'CD' | 'DA' | 'DB' | 'DC' | 'ABC' | 'ABD' | 'ACB' | 'ACD' | 'ADB' | 'ADC' | 'BAC' | 'BAD' | 'BCA' | 'BCD' | 'BDA' | 'BDC' | 'CAB' | 'CAD' | 'CBA' | 'CBD' | 'CDA' | 'CDB' | 'DAB' | 'DAC' | 'DBA' | 'DBC' | 'DCA' | 'DCB' | 'ABCD' | 'ABDC' | 'ACBD' | 'ACDB' | 'ADBC' | 'ADCB' | 'BACD' | 'BADC' | 'BCAD' | 'BCDA' | 'BDAC' | 'BDCA' | 'CABD' | 'CADB' | 'CBAD' | 'CBDA' | 'CDAB' | 'CDBA' | 'DABC' | 'DACB' | 'DBAC' | 'DBCA' | 'DCAB' | 'DCBA'>>,
// ]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4260/answer
  > View solutions: https://tsch.js.org/4260/solutions
  > More Challenges: https://tsch.js.org
*/
// const test = (obj:Record<PropertyKey,unknown>,arr:string[]) =>  Object.keys(obj).forEach(key => !arr.includes(key) && (obj[key] = ''))