function teste(number) {
    if (isNaN(number)) {
        return number;
    }
    if (number % 5 === 0) {
        if (number % 3 === 0) {
            return 'FizzBuzz';    
        }
        return 'Buzz';
    }
    if (number % 3 === 0) {
        if (number % 5 === 0) {
            return 'FizzBuzz';
        }   
        return 'Fizz';
    }
    return number;
}

function fizzBuzz(number) {
    if (typeof(number) !== 'number') return NaN;
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'BUzz';
    return number;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}