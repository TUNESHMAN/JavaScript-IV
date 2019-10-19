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
  grade(student, favSubjects) {
    return `${student.name} receives a perfect score on ${student.favSubjects}`;
  }
}
const Instructor1 = new Instructor(
  `Gabriel`,
  42,
  `Madrid`,
  `Redux`,
  `Python`,
  `Don't forget the homies`
);
const Instructor2 = new Instructor(
  `Alex`,
  28,
  `California`,
  `Android`,
  `React`,
  `I love you all`
);
console.log(Instructor1.demo(`JavaScript`));


// This is the student class
class Student extends Person {
  constructor(name, age, location, previousBackground, className, favSubjects) {
    super(name, age, location);
    this.previousBackground = previousBackground;
    this.className = className;
    this.favSubjects = favSubjects;
  }
  listsSubjects() {
    return `I love React Hooks`;
  }
  PRAssignment() {
    return `student.name has submitted a PR for {subject}`;
  }
  sprintChallenge(student) {
    return `${student.name} has begun sprint challenge on ${student.favSubjects}`;
  }
}

const student1 = new Student(
  `Babatunde`,
  27,
  `Lagos`,
  `Babatunde is a former banker`,
  `WEBEU4`,
  `React Hooks`
);
console.log(student1.sprintChallenge(student1));
console.log(Instructor2.grade(student1, `subject`));

// This is the Project Manager class
class ProjectManager extends Instructor {
  constructor(
    name,
    age,
    location,
    specialty,
    favLang,
    catchPhrase,
    gradClassName,
    favInstructor
  ) {
    super(name, age, location, specialty, favLang, catchPhrase);
    this.gradClassName = gradClassName;
    this.favInstructor = favInstructor;
  }
  standUp(slackChannel) {
    return `{name} announces to {channel}, @channel standby times!`;
  }
  debugsCode(student) {
    return `${this.name} debugs ${student.name}'s code on ${student.favSubjects}`;
  }
}
const ProjectManager1 = new ProjectManager(
  `Tigran`,
  30,
  `Romania`,
  `Redux`,
  `Catch ya!`,
  `webEU4_Tigran`,
  `Sean`
);
console.log(ProjectManager1.debugsCode(student1));


