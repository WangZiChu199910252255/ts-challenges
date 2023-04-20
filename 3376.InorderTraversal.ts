/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-04-19 13:37:05
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-04-19 14:06:08
 * @FilePath: /ts-challenges/3376.InorderTraversal.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
  3376 - InorderTraversal
  -------
  by jiangshan (@jiangshanmeta) #medium #object

  ### Question

  Implement the type version of binary tree inorder traversal.

  For example:

  ```typescript
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const

  type A = InorderTraversal<typeof tree1> // [1, 3, 2]
  ```

  > View on GitHub: https://tsch.js.org/3376
*/

/* _____________ Your Code Here _____________ */

interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
  }
  type InorderTraversal<T extends TreeNode | null, U extends TreeNode = NonNullable<T>>
  = T extends U
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];
  
  /* _____________ Test Cases _____________ */
  import type { Equal, Expect } from '@type-challenges/utils'
  
  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const
  
  const tree2 = {
    val: 1,
    left: null,
    right: null,
  } as const
  
  const tree3 = {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: null,
  } as const
  
  const tree4 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null,
    },
  } as const
  
  type cases = [
    Expect<Equal<InorderTraversal<null>, []>>,
    Expect<Equal<InorderTraversal<typeof tree1>, [1, 3, 2]>>,
    Expect<Equal<InorderTraversal<typeof tree2>, [1]>>,
    Expect<Equal<InorderTraversal<typeof tree3>, [2, 1]>>,
    Expect<Equal<InorderTraversal<typeof tree4>, [1, 2]>>,
  ]
  
  /* _____________ Further Steps _____________ */
  /*
    > Share your solutions: https://tsch.js.org/3376/answer
    > View solutions: https://tsch.js.org/3376/solutions
    > More Challenges: https://tsch.js.org
  */
  