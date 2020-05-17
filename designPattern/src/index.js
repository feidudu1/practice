class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
  static getPos() {
    console.log("hi");
  }
}
class Student extends Person {
  constructor(props, number) {
    super(props);
    this.number = number;
  }
  study() {
    console.log(this.number);
  }
}
const xiaoming = new Student("feifei", 11);
xiaoming.getName();
xiaoming.study();
Student.getPos();
