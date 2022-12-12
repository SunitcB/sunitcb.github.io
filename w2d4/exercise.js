// Solution to the Exercise #1
console.log("EXERCISE #1");

String.prototype.filtering = function (...banned) {
    let before = this;
    console.log("Before the filtering the string received in the filtering function, " + before + " with banned words: " + banned);
    let strArr = this.split(' ');
    console.log("Output:");
    return strArr.filter(x => !banned.includes(x)).reduce((acc, y) => acc + " " + y);
}

console.log("I am not Sunit!".filtering('not', 'a'));

// Solution to the Exercise #2

console.log("EXERCISE #2");

Array.prototype.bubbleSort = function () {
    let intArr = this;
    console.log("Before sorting, the unsorted array received on the function is: " + intArr);
    for (let i in intArr) {
        for (let j = 0; j < (intArr.length - i - 1); j++) {
            if (intArr[j] > intArr[j + 1]) {
                let temp = intArr[j];
                intArr[j] = intArr[j + 1];
                intArr[j + 1] = temp;
            }
        }
    }
    console.log("After bubble sorting, the output is:");
    return intArr;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort());

// Solution to the Exercise #3

console.log("EXERCISE #3");

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