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
