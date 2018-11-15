// Exercise 1 - Class
class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Toooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

const carClass = new Car("BMW");
carClass.honk();
console.log(carClass.acceleration);
carClass.accelerate(20);
console.log(carClass.acceleration);

// Exercise 2 - Inheritance
class BaseObject {
    width = 0;
    length = 0;
}

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());

// Exercise 3 - Getters & Setters
class PersonSampleClass {
    private _firstName: string = "";

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const personClass = new PersonSampleClass();
console.log(personClass.firstName);
personClass.firstName = "Ma";
console.log(personClass.firstName);
personClass.firstName = "Maximilian";
console.log(personClass.firstName);