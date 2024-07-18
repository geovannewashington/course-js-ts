//The Object.defineProperty() static method defines a new property directy on a object, or 
//modifies an existing on a object and returns the object.
//Example:

const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false,
});

object1.property1 = 77;
//Throws an error in strict mode

//console.log(object1.property1);
//Expected Output:42

//Let's see a more realistic example:
//Let's say we have a construction function whose job is to create new products

function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        //true if and only if this property 'stock in this case' shows up during enumeration of the
        //properties on the corresponding object, OBS: *defaults to false
        value: stock,
        //The value associated with the property. Can be any valid JavaScript value 
        //(number, object, function, etc.). Defaults to undefined.
        writable: false, //if we set this to false, then it acts like a read-only property
        //true if the value associated can be changed with an assigment operator.
        //OBS: *defaults to false
        configurable: false
    });

    this.stock = 20; //If writable is set to false then this will not work, throwing an error in 
                     //strict mode

    delete this.stock; //this will only work if the property is configurable
}

const basicShirt = new Product('T-shirt', 9.25, 137);
console.log(Object.keys(basicShirt), basicShirt.stock);

//The static method Object.defineProperties is very similar to the defineProperty one
//Example:

const object2 = {};

Object.defineProperties(object2, {
    property1: {
        value: 42,
        writable: true,
    },
    property2: {},
});

console.log(object2.property1);