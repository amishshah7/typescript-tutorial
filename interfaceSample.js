"use strict";
function greetIS(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var personIS = {
    firstNameIS: "Max",
    hobbies: ["Cooking", "Sports"],
    greetIS: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName: "Max", age: 27});
changeName(personIS);
greetIS(personIS);
personIS.greetIS("Anything");
var PersonIS = /** @class */ (function () {
    function PersonIS() {
    }
    PersonIS.prototype.greetIS = function (lastName) {
        console.log("Hi, I am " + this.firstNameIS + " " + lastName);
    };
    ;
    return PersonIS;
}());
var myPerson = new PersonIS();
myPerson.firstNameIS = "Maximilian";
myPerson.lastNameIS = "Anything";
greetIS(myPerson);
myPerson.greetIS(myPerson.lastNameIS);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstNameIS: "Max",
    greetIS: function (lastName) {
        console.log("Hello!");
    }
};
console.log(oldPerson);
