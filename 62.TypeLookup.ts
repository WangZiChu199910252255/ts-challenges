/*
  62 - Type Lookup
  -------
  by Anthony Fu (@antfu) #中等 #union #map
  
  ### 题目
  
  有时，您可能希望根据某个属性在联合类型中查找类型。
  
  在此挑战中，我们想通过在联合类型`Cat | Dog`中搜索公共`type`字段来获取相应的类型。换句话说，在以下示例中，我们期望`LookUp<Dog | Cat, 'dog'>`获得`Dog`，`LookUp<Dog | Cat, 'cat'>`获得`Cat`。
  
  ```ts
  interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
  }
  
  interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
  }
  
  type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
  ```
  
  > 在 Github 上查看：https://tsch.js.org/62/zh-CN
*/


/* _____________ 你的代码 _____________ */

// type LookUp<U extends {type: string}, T> = U['type'] extends T ? U : never
type LookUp<U,T> = U extends {type : string} ?  U['type'] extends T ? U : never : never

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>,
]