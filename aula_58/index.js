//forEach() array method examples:

let numbers = [1, 2, 3, 4, 5];

//Using forEach to log each element
numbers.forEach(function(number) {
    //console.log(number);
});

//or using arrow function
numbers.forEach(number => console.log(number));

//Using index parameter 
numbers.forEach(function(number, index) {
    //console.log(`Index: ${index}, Value: ${number}`);
});

//or using arrow function
numbers.forEach(
    (number, index) => {
        console.log(`Index: ${index}, Value: ${number}`);    
    }
);

//Using thisArg
let context = { multiplier: 2 };
numbers.forEach(function(number) {
    console.log(number * this.multiplier);
}, context);