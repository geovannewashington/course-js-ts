/*JavaScript Switch Statment*/
//Code Example:

const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and Papayas are $2.79 a pound.');
        //Expected Output: "Mangoes and Papayas are $2.79 a pound"
        break;
    default:
        console.log(`Sorry, we are out of ${expr}`);
}
