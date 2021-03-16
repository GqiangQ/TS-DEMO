/**

传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

例如：

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

 */

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]] : P
}

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// let a: TupleToObject<typeof tuple>; 

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const


type Test = TupleToObject<typeof tuple>