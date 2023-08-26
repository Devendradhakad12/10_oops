//Object Oriented Programming
// to structure our code 
 
//* Object Prototypes

let arr = [1,2,3,4,5]
let ar2 = [1,2,3,4,5]
arr.sayhello = ()=>{
    console.log("hello, i am arr")
}
arr2.sayhello = ()=>{
    console.log("hello, i am arr")
}

console.log(arr.sayhello === arr2.sayhello) //false
console.log("abx".toUpperCase === "xyz".toUpperCase) // true part of prototype

arr.__proto__.push=(n) => {console.log(`pushing : ${n}`)}
arr.push(34)
console.log(arr)