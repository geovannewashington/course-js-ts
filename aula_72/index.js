class EletronicDevice {
    constructor(name) {
        this.name = name;
        this.isOn = false;
    }

    turnOn() {
        if (this.isOn) {
            console.log(this.name + ' is alrady turned on');
        }

        this.isOn = true;
    }

    turnOff() {
        if (!this.isOn) {
            console.log(this.name + ' is alrady turned off');
        }
    
        this.isOn = false;
    }

}

class Smartphone extends EletronicDevice {
    constructor(name, color, model) {
        super(name);

        this.color = color;
        this.model = model;
    }
}

const iPhone = new Smartphone('iPhone', 'Gray', '15 Pro Max');
console.log(iPhone); //Outputs: 
