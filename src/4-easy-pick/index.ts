/**
实现 TS 内置的 Pick<T, K>，但不可以使用它。

从类型 T 中选择出属性 K，构造成一个新的类型。

例如：

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
 */


/**
 * 
 * @param todo 
 * @param keys 
 * 
 * 本质是组成新的类型，类型的属性有keys决定，属性的类型有todo中获取
 * 
 * @returns {}
 */

const funcMyPick = (todo: any, keys:string[]) => {
  let obj: any = {};
  keys.forEach(key => {
    if(key in todo){
      obj[key] = todo[key]
    }
  });
  return obj
}

// K 是union 联合类型
type MyPick<T, K extends keyof T> = {
  [P in K] : T[P]
}