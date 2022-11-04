type Test = { 
  id: number,
  name: string, 
  children:number[] | Test[]
}
const arrData:Test[] = [
  {
    id: 2,
    name: '2',
    children: [1, 3]
  }, {
    id: 3,
    name: '3',
    children: [4]
  }, {
    id: 1,
    name: '1',
    children: [5]
  }, {
    id: 4,
    name: '4',
    children: []
  }, {
    id: 5,
    name: '5',
    children: []
  }
]
const test = (arrData: Test[]): Test => {
  const numArr:number[] = []
  arrData.forEach(data => arrData.forEach(item => {
    item.children.forEach(num => num === data.id && numArr.push(num))
  }))
  let first =  arrData.filter(item => !numArr.includes(item.id))[0]
  first = setChild(first)!
  return first
}
const setChild = (Test: Test) => {
  console.log(Test,'test')
  if (Test.children.length === 0) return
  Test.children = Test.children.map(child => {
    const newChild = arrData.filter(item => item.id === child)[0]
    newChild.children && setChild(newChild)
    return newChild
  })
  return Test
}
console.log(JSON.stringify(test(arrData)))