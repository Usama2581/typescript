// // // const user:any = ['usama', 'faham', 'nadir', 'basit', 10]
// // // console.log(user)
// // // const obj = {
// // //     name: 'usama',
// // //     age: 10,
// // //     gender: 'male',
// // // }
// // // // obj.city = 'karachi'
// // // console.log(obj)
// // // const arr:any[] = ['node', 'js', 'ts', 'jave', 'c', 12]
// // // console.log(arr)
// // const person:{} = {
// //     name: 'usama',
// //     age: 23,
// //     gender: 'male'
// // }
// // // person.city = 'karachi'
// // console.log(person)
// // // ------------tuple-----------
// // // to make an array of mixed datatype e.g ['usama', 12, true ]
// // const data:[string, number, boolean, number?] = ['usama', 12, true]
// // data.push(1)
// // console.log(data)
// // //---------Enum------------
// // // An enum is a special "class" that represents a group of constants that can be accessed with number that can be assigned and default value is 1
// // enum Color {
// //     Red = 100,
// //     Green,
// //     Blue
// // }
// // console.log(Color.Red)
// //----union----
// // let abc: string | number
// // abc = 'abc'
// // console.log(abc)
// // abc = 123
// // console.log(abc)
// //------alias----------
// // Type Aliases allow defining types with a custom name
// type varType = string | number | boolean
// let var1: varType = 'abc'
// let var2: varType = 123
// let var3: varType = true
// console.log(var1)
// console.log(var2)
// console.log(var3)
// //-------Functions-------------
// function sum (a:number, b: number):number {
//     return a + b
// }
// console.log(sum(1,3))
// //----unknown----- is more suitable as compared to any
// //------literal---------
// //if value is assigned instead of type 
// let a: 12 | 'usama' = 'usama' // 3rd value can't be added
// console.log(a)
// //------Interfaces----------
// //Interfaces are similar to type aliases, except they only apply to object types.
// interface Person {
//     name: string,
//     age: number,
//     gender: string
// }
// const person: Person = {
//     name: 'usama',
//     age: 23,
//     gender:'male'
// }
// console.log(person)
//------------CONSTRUCTOR--------------
//it is used to give different values to varibale when we create more object of class
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
var obj1 = new Person('usama', 23, 'male');
var obj2 = new Person('nadir', 23, 'male');
console.log(obj1);
console.log(obj2);
