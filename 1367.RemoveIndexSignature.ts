/*
  1367 - Remove Index Signature
  -------
  by hiroya iizuka (@hiroyaiizuka) #medium 
  
  ### Question
  
  Implement `RemoveIndexSignature<T>` , exclude the index signature from object types.
  
  For example:
  
  ```
  
  type Foo = {
    [key: string]: any;
    foo(): void;
  }
  
  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
  
  ```
  
  > View on GitHub: https://tsch.js.org/1367
*/


/* _____________ Your Code Here _____________ */

type IsIndexSignature<Index> = string extends Index
    ? never
    : number extends Index
      ? never
      : symbol extends Index
        ? never
        : Index;

type RemoveIndexSignature<Object> = {
  [
    i in keyof Object as
        IsIndexSignature<i> extends never ? never : i
    ]: Object[i];
};
type i = IsIndexSignature<keyof Baz>
type n = RemoveIndexSignature<Bar>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol('foobar')
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>,
]