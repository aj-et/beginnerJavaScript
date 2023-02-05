// Numbers

// An integer is a whole number.
const myNumber = 42;

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0151;

const myString = "42.123abc";

console.log(myNumber === myString);
// It's false because they are of different data types

console.log(myString + 3);
console.log(Number(myString) + 3);

console.log(Number(myString) === myNumber);
console.log(Number("Aaron")); // Not a number

console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Number Methods
// The Number.isInteger() method determines whether the passed value is an integer

console.log(Number.isInteger(myString));
console.log(Number.parseFloat(myString));

// The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(Number.parseFloat(myString).toFixed(2)); // Rounds up decimal
console.log(myFloat.toFixed(2)); // toFixed returns data to string
console.log(Number.parseInt(myFloat)); // converts to number data type
console.log(typeof Number.parseFloat(myString));
console.log(typeof Number.parseFloat("4.237abc").toFixed(2));

Number.isNaN()
console.log(Number("Aaron"));