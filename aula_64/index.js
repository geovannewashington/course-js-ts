function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100))
};

Product.prototype.increase = function(percentage) {
    this.price = this.price + (this.price * (percentage / 100))
};

const product1 = new Product('T-shirt', 30);
//product1.increase(50);
product1.discount(5);
console.log(product1.price); //Outputs: 27

const product2 = {
    name: 'Mug',
    price: 7.19
};

Object.setPrototypeOf(product2, Product.prototype);

product2.increase(100);
console.log(product2.price); //Outptus: 14.38

const product3 = Object.create(Product.prototype, {
    price: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    size: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    } 
});

product3.increase(10);
console.log(product3.price); //Outputs: 108.9
