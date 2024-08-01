const myArr = [1, 2, 3, 4, 5];

const newArr = myArr.filter((a) => {
    //first argument is the value of the current index
    //second argument is the current index itself
    //the third value is the whole array
    return a % 2 !== 0;
});

console.log("those numbers are odd:", ...newArr);