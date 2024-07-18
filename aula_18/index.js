/*Introduction to Javascript Objects*/
//example:
const cars = {
    type: 'fiat',
    model: '500',
    color: 'white'
}
//In this case type, model and color are properties of the object car

/*Acessing Object Properties*/
//There's two ways of doing it: objectName.propertyName or objectName['propertyName']
//Example
//(cars.type);     //Outputs: 'fiat'
//(cars['type'])   //Outputs: 'fiat' as well

/*Objects can also have Methods*/
/*Methods are actions that can be perfomed on objects*/
//A method is a function stored as a property, example:
const person = {
    firstName : 'John',
    lastName  : 'Doe',
    id        : '5566',
    fullName  : function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.fullName()); //Expected output: John Doe