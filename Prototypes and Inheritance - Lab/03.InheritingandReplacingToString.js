function result() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }

    toString() {
      return super.toString().replace(")", ",") + ` subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }

    toString() {
      return super.toString().replace(")", ",") + ` course: ${this.course})`;
    }
  }

  return { Person, Teacher, Student };
}

let classes = result();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan", "ivan@ivan.com", "Graphics");
expect(t.toString()).to.equal(
  "Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)"
);
