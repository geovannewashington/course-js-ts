const _velocity = Symbol('velocity');

class Car {
    constructor(name) {
        this.name = name;
        this[_velocity] = 0;
    }

    get velocity() {
        return this[_velocity];
    }

    set velocity(value) {
        if (typeof value !== 'number') return;
        if (value >= 100 || value <= 0) return;
        this[_velocity] = value;
    }

    acelerate() {
        if (this[_velocity] >= 100) return;
        this[_velocity]++;
    }

    brake() {
        if (this[_velocity] <= 0) return;
        this[_velocity]--;
    }
}

const car1 = new Car('Audi');

for (let i = 0; i <= 200; i++) {
    car1.acelerate();
}

console.log(car1.velocity);