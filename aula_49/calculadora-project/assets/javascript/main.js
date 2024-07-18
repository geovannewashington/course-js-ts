//Constructor Function
function Calculator() { 
    this.display = document.querySelector('.display');

    this.start = () => {
        this.buttonClick();
        this.pressEnter();
        this.pressBackspace();
    };

    this.buttonClick = () => {
        addEventListener('click', (event) => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.appendToDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.deleteLastChar();
            if (el.classList.contains('btn-eq')) this.performCalc();
        });
    };

    this.appendToDisplay = (value) => this.display.value += value;
    this.clearDisplay = () => this.display.value = '';
    this.deleteLastChar = () => this.display.value = this.display.value.slice(0, -1);

    this.performCalc = () => {
        try {
            const values = eval(this.display.value);
            
            if (!values) {
                alert('Invalid Operation!');
                return;
            }
            this.display.value = values;
        } catch {
            alert('Invalid Operation!')
            return;
        }
    }

    this.pressEnter = () => {
        addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.performCalc();
                this.display.focus();
            } 
        });
    };

    this.pressBackspace = () => {
        addEventListener('keydown', (event) => {
            if (event.key === 'Backspace') {
                this.clearDisplay();
                this.display.focus();
            } 
        });
    };
}

const calculator = new Calculator();
calculator.start();

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greetings = () => {
//         console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
//     };
// }

// const user1 = new Person('John', 25);
// const user2 = new Person('Lana', 30);

// user1.greetings();
// user2.greetings();