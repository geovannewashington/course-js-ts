//Getter (get)
//. the 'get' syntax binds an object property to a function that is called when that property is
// acessed.

//Setter (set)
//. the 'set' syntax binds an object property to a function that is called when an attempet is 
// made to set that property

//Example:

function Tshirt(name, stock, price, color) {
    this.name = name;
    this._stock = stock; //Private property convention
    this.price = price;
    this.color = color;

    //Define both getter and setter for stock
    Object.defineProperty(this, 'stock', {
        get: function() {
            return this._stock;
        },
        
        set: function() {
            console.log('Stock cannot be modified directly!');
        },

        enumerable: true
    });
}

const myShirt = new Tshirt('Cool T-Shirt', 100, 19.99, 'blue');


console.log(myShirt.name); // "Cool T-Shirt"
console.log(myShirt.stock); // 100
console.log(myShirt.price); // 19.99
console.log(myShirt.color); // "blue"

//Attemping to change stock
myShirt.stock = 50; //Logs: 'Stock cannot be modified directly!'
console.log(myShirt.stock); //100 (Remains unchaged)