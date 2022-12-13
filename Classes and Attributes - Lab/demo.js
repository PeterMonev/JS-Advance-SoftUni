class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`${this.name} say hello`);
  }
}

const guy1 = new Person("Peter", 23);
const guy2 = new Person("Ivan", 33);
const guy3 = {
    name: 'May',
    age: 24,
    sayHello() {
        console.log(`${this.name} say hello`);
      }
}
console.log(guy1,guy2)

guy1.sayHello();
guy2.age++;

console.log(guy2)
console.log(guy3)

console.log(guy1 instanceof Person);
console.log(guy3 instanceof Person);
console.log(guy1 instanceof Object);

