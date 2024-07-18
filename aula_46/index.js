//IIFE (Immediately Invoked Function Expression) 
//*avoid polluting the global namespace

//Examples:
(function() {
    // [...]
    console.log('I was immediately invoked');
})();

//Using Arrow Function:
(() => {
    // [...]
    console.log('I was also immediately invoked :)');
})();

//We can pass arguments, example:

const myArr = [ 1, 2, 3, 4, 5 ];

((arrElements) => {
    console.log(arrElements);
})(myArr);

