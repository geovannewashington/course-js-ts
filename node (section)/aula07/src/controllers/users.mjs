export default (require, response) => {
    response.send(
        [
            {name: 'John', id: '124135', age: 23},
            {name: 'Mary', id: '13515', age: 26},
            {name: 'Joseph', id: '90536', age: 32},
        ]
    );

}; 