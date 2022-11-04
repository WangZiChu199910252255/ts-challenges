/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #中等 #array #built-in
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  键入函数`PromiseAll`，它接受PromiseLike对象数组，返回值应为`Promise<T>`，其中`T`是解析的结果数组。
  
  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });
  
  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)
  ```
  
  > 在 Github 上查看：https://tsch.js.org/20/zh-CN
*/


/* _____________ 你的代码 _____________ */

declare function PromiseAll<T extends any[]>(values: readonly [...T]): 
  Promise<{[P in keyof T]: T[P] extends Promise<any> ? Awaited<T[P]> : T[P]}>


/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]