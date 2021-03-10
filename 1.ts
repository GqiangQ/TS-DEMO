
/*interface
interface Person {
  fName:String,
  lName:String
}
interface SetUser {
  (name: string, age: number): void;
}

function greeter (person: Person) {
  return `hello ${person.fName} - ${person.lName}`
}
let user:Person = {
  fName:'fffff',
  lName:'lllll'
}
console.log(greeter(user))
*/
class Student {
  fullName: string;
  constructor(public fName, public middleInitail, public lName){
    this.fullName = `${fName}-${middleInitail}-${lName}`
  }
}

interface Person {
  fName:string;
  lName:string;
}

function greeter (person: Person) {
  return `hello ${person.fName} - ${person.lName}`
}
let user = new Student("Jane", "M.", "User")
console.log(greeter(user))