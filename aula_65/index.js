function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.increase = function(amount) {
    this.price += amount;
};

Product.prototype.discount = function(amount) {
    this.price -= amount;
};

function Tshirt(name, price, color) {
    Product.call(this, name, price);
    this.color = color;
}

Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;

function Mug(name, price, material, stock) {
    Product.call(this, name, price);
    this.material = material;

    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get: function() {
            return stock;
        },

        set: function(value) {
            if (typeof value !== 'number') return;
            stock = value;
        }
    });
}

Mug.prototype = Object.create(Product.prototype);
Mug.prototype.constructor = Mug;

const myShirt = new Tshirt('Cool Tshirt', 17.50, 'Light-Blue');
const myMug = new Mug('Cool Mug', 29.90, 'Plastic', 17);

myShirt.increase(10);
myMug.discount(10);

console.log(myMug.constructor);
// console.log(myShirt.constructor);