class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`${this.name} is saying: 'Hi :)'`);
    }
}

const person1 = new Person('John', 33);
const person2 = new Person('Helena', 25);