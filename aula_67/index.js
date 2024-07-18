const talk = {
    talk() {
        console.log(`${this.name} is talking...`);
    }
};

const eat = {
    eat() {
        console.log(`${this.name} is eating...`);
    }
};

const drink = {
    drink() {
        console.log(`${this.name} is drinking...`);
    }
};

const personPrototype = Object.assign({}, talk, eat, drink);

function createsPerson(name, surname) {
    return Object.create(personPrototype, {
        name: { value: name },
        surname: { value: surname }
    });
}

const person1 = createsPerson('Lewis', 'Hamilton');
const person2 = createsPerson('Mary', 'Logan');
console.log(person2);