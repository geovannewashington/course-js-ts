//Constructor Function
function buildCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.buttonClick();
            this.pressEnter();
            this.pressBackspace();
        },

        pressEnter() {
            document.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    this.performCalc(); 
                }
            });
        },

        pressBackspace() {
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Backspace') {
                    this.clearDisplay();
                }
            });
        },

        buttonClick() {
            document.addEventListener('click', (event) => {
                const htmlElement = event.target;
                
                if (htmlElement.classList.contains('btn-num')) {
                    this.appendToDisplay(htmlElement.innerText);
                }

                if (htmlElement.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (htmlElement.classList.contains('btn-del')) {
                    this.deleteLastChar();
                }

                if (htmlElement.classList.contains('btn-eq')) {
                    this.performCalc();
                }

                this.display.focus();
            });
        },

        appendToDisplay(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteLastChar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        performCalc() {
            let values = this.display.value;
            
            try {
                values = eval(values);

                //In case it evaluates to falsy
                if (!values) {
                    alert('Invalid Action!');
                    return;
                }   
            } catch (e) {
                alert('Invalid Action!');
                return;
            }
            this.display.value = values;
        },
    }
}

const calculator = buildCalculator();
calculator.start();