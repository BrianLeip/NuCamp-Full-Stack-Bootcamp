class Student {
  constructor (name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
};

class Bootcamp {
  constructor (name, level, students=[]) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(student) {
      // if(this.students.filter(s => s.email === student.email).length) {
      // NOTE: ALTERNATIVE METHOD BELOW EXPANDS OUT THE .LENGTH PIECE SO I CAN BETTER UNDERSTAND HOW EMPTY ARRAYS ARE HANDLED IN JS
      // REFERENCED THIS USEFUL INFO ON STACK OVERFLOW: https://stackoverflow.com/questions/24403732/how-to-check-if-array-is-empty-or-does-not-exist
      let emailCheck = this.students.filter(s => s.email === student.email);
      if(emailCheck != undefined && emailCheck.length > 0) {
        console.log(`Student with email address ${student.email} is already registered for the ${this.name} bootcamp.`);
      }
      else {
        console.log(`Registering ${student.name}(${student.email}) as student # ${this.students.length+1} to the bootcamp ${this.name}.`);
        this.students.push(student);
      }
    return this.students;
  }
};

const student1 = new Student('Brian', 'brian@email.com', 'So Cal');
const student2 = new Student('Andrew', 'andrew@email.com', 'So Cal');
const student3 = new Student('Mary', 'mary@email.com', 'So Cal');
const bootcamp1 = new Bootcamp('React', 'Intermediate');
bootcamp1.registerStudent(student1);
bootcamp1.registerStudent(student2);
bootcamp1.registerStudent(student3);
bootcamp1.registerStudent(student1);