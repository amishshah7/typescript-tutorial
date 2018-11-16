interface NamedPerson {
    firstNameIS: string;
    age?: number;
    [propName: string]: any;
    greetIS(lastName: string): void;
}

function greetIS(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const personIS: NamedPerson = {
    firstNameIS: "Max",
    hobbies: ["Cooking", "Sports"],
    greetIS(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};

// greet({firstName: "Max", age: 27});
changeName(personIS);
greetIS(personIS);
personIS.greetIS("Anything");

class PersonIS implements NamedPerson {
    firstNameIS!: string;
    lastNameIS!: string;

    greetIS(lastName: string) {
        console.log("Hi, I am " + this.firstNameIS + " " + lastName);
    };
}

const myPerson = new PersonIS();
myPerson.firstNameIS = "Maximilian";
myPerson.lastNameIS = "Anything";
greetIS(myPerson);
myPerson.greetIS(myPerson.lastNameIS);


// Function Types


interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));


// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstNameIS: "Max",
    greetIS(lastName: string) {
        console.log("Hello!");
    }
};

console.log(oldPerson);