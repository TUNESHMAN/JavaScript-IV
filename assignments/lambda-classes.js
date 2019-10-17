// CODE here for your Lambda Classes
class Person {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}
// The 2 Person's are Joel and Tasha
const Person1 = new Person(`Joel`, 30, `Pretoria`);
const Person2 = new Person(`Tasha`, 25, `Manchester`);
console.log(Person1, Person2);

// This is the instructor class
class Instructor extends Person {
  constructor(name, age, location, specialty, favLang, catchPhrase) {
    super(name, age, location);
    this.specialty = specialty;
    this.favLang = favLang;
    this.catchPhrase = catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade (student){
      return `${student.name} receives a perfect score on ${subject}`;

  }
}
const Instructor1 = new Instructor (`Gabriel`, 42 , `Madrid`, `Redux`, `Python`, `Don't forget the homies` )
const Instructor2 = new Instructor (`Alex`, 28,`California`, `Android`, `React`, `I love you all` )
console.log(Instructor1.demo());
console.log(Instructor2.grade());

