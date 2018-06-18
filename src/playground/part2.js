//car
//make
//model
//vin
//getdescription

class Car extends React.Component {
  constructor(name, description) {
    super();
    this.name = name;
    this.description = description;
  }
  getdescription() {
    return this.description;
  }
}

class Person {
  constructor(name = "Anonnymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello, I'm ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age}(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age, location);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` and his/her major is ${this.major}`;
    }
    return description;
  }
}

const me = new Student("Heiner", 27, "IT");
console.log(me.getDescription());
