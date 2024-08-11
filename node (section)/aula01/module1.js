function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

//First way of exporting it (Node)
// module.exports = add;
module.exports = {
    add, 
    subtract
};

// const name = 'Washington';
// const surname = 'Vasconcelos';
// const add = (a, b) => a + b;

// module.exports.add = add;
// module.exports.name = name;
// exports.surname = surname;

