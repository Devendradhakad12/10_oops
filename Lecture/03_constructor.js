// Constructors - doesn't return anything & start with capital latter

function Person(name, age) {
  // Constructor
  (this.name = name), (this.age = age);
}
Person.prototype.talk = function () {
    console.log(`Hi my name is ${this.name}`);
  };
// New Keyword - The new operator lets developers create an instance of a user-defined object type or of one of the built-in object type has a constructor function


let p1 = new Person("dev", 18); // - instance
console.log(p1.talk());
console.log(p1);
let p2 = new Person("ajay", 19); // - instance
console.log(p2.talk());
console.log(p2);
