var Person = function () { };

Person.prototype.initialize = function (name, age) {
    console.log("Initializing the object with name: " + name + " and age: " + age);
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}

var Student = function () { };
Student.prototype = new Person();
Student.prototype.learn = function (subject) {
    console.log(this.name + " just learned " + subject);
}

var Teacher = function () { };
Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    console.log("Output:")
    return this.name + " is now teaching " + subject;
}

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

console.log("Creating new Teacher object from constructor function...");
var teacher = new Teacher();
teacher.initialize("Joakim Noah", 27);
console.log(teacher.teach("basketball"));
