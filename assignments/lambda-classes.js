// CODE here for your Lambda Classes
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak () {
      return `Hello my name is ${this.name}, I am from ${this.location}`
  }
}
// The 2 Person's are Joel and Tasha
const Person1 = new Person (`Joel`, 30 , `Pretoria`);
const Person2 = new Person (`Tasha`, 25 , `Manchester`);
console.log(Person1, Person2);

