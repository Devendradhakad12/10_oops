// Inheritance is a mechanism that allows us to create new clasees on the basis of already existing classes

class Person {
  // base class / parent class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, my name is ${this.name}`);
  }
  intro() {
    console.log(`i am a Person ${this.name}`);
  }
}

class Student extends Person {
  // child class of person
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
  intro() {
    console.log(`i am a Student ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  intro() {
    console.log(`i am a Teacher ${this.name}`);
  }
}

let s1 = new Student("mahi", 18, 89);
console.log(s1);
console.log(s1.talk());
console.log(s1.intro());
let t1 = new Teacher("shradha", 18, "Web Development");
console.log(t1);
console.log(t1.talk());
console.log(t1.intro());
