function personMaker(name,age){
    const person ={
        name:name,
        age:age,
        talk(){
            console.log(`Hi my name is ${this.name}`)
        }
    }
    return person
}

const p1 = personMaker("dev",18)
console.log(p1)
console.log(p1.talk())


/* Factory functions are a common programming pattern in JavaScript used for creating and returning objects. While factory functions have many advantages, they also come with some disadvantages:

1. Lack of Shared Methods: Each instance created by a factory function is a unique object with its own set of properties. This means that if you want to define methods that should be shared among all instances, you need to attach them separately to each instance. This can lead to increased memory usage and potential inefficiency compared to using prototypes or classes.

2. Memory Consumption: Factory functions create a new copy of methods for each instance. If you have a large number of instances, this can consume more memory compared to using prototypes where methods are shared among instances.

3. Less Efficient Inheritance: Achieving inheritance using factory functions can be less straightforward compared to using the prototype chain with constructor functions or ES6 classes. This can make it more challenging to create complex class hierarchies.

4. Less Familiar Pattern: While factory functions are a valid and useful pattern, they might be less familiar to developers who are used to class-based inheritance or other object-oriented programming paradigms. This can lead to confusion or difficulty for those who are new to the concept.

5. Less Built-in Language Support: Factory functions do not have the built-in support and syntactical sugar that classes introduced in ES6 have. For example, classes provide the extends keyword for easy inheritance, and constructors can be more intuitive for setting up initial values.

6. Readability and Maintenance: Depending on how factory functions are structured, the code can become less readable and harder to maintain, especially if there are multiple layers of nested factories or complex object creation logic.

7. Potential Performance Impact: While JavaScript engines have become highly optimized, the process of creating multiple objects through factory functions might have a slight performance impact compared to other object creation methods, such as object literals or constructor functions.

8. Limited Conventions: Classes have become a widely adopted convention for defining and working with objects in modern JavaScript. Using factory functions might deviate from this convention and lead to confusion for developers who are more accustomed to working with classes. */

//Despite these disadvantages, factory functions can still be a useful tool in certain scenarios, such as when you need to encapsulate object creation logic, create objects with private data, or have more control over instance creation. It's important to carefully consider your use case and weigh the pros and cons before deciding to use factory functions over other object creation patterns.




