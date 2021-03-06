// Booleans
// what is a boolean?

var on = true;
console.log(on); // evaluates to true
let off = false;
console.log(off);

// boolean can represent: on/off, yes/no, true/false

// null = empty value (not 0; not undefined)
var empty = null;
console.log(empty); //null

/* 
We've talked about how every variable is basically a storage container in JS, think of variables with null and undefined
as packages coming out of UPS. Null packages are packages that were intentionally packed up with nothing, but have been assembled...
undefined packages are packages that have nothing in them but have not yet been assembled to leave UPS
*/

// Numbers
var degrees = 90;
console.log(degrees);

var precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

var rounded = 9999999999999999; // (one more 9, 16)
console.log(rounded); // 10000000000000000

var notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard) // 0.3

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo); // double quotes single quotes

// NUmber vs. Strings
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);
console.log(typeof first);
console.log(typeof second);

/*
Addition vs concatentation

when JS sees combining two or more numbers, it adds the values together using the built-in math functionality; when it see adding together one or more strings, it changes and the plus sign becomes an assignment operator -- it smashes the values together without trying to synthesize the values
*/

let third = 1050 + '100';

console.log(third); // 1050100
console.log(typeof third); // string

/*
Challenge:
Set 7 or 8 variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
*/

let firstName = 'Justis';
let lastName = 'Gipson';
let houseNumber = 2155;
let street = 'Crossford Way';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = 46234;

console.log(`${firstName} ${lastName}, ${houseNumber} ${street} ${city}, ${state} ${zipcode}`)

// Objects
/*
What is an object?

A container that can hold multiple datatypes

Denoted by {}
has keys and values (color(key): 'blue' (value)), separated with a colon
Each key separated with a comma
*/

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
};

console.log(burritosNow)
console.log(typeof burritosNow) //object


// Arrays
/*
Arrays are great for lists

Denoted by []
HAs values ('blue', 'green', 'yellow'), serarated by commas
*/

var burritos = ['large', 4, true]
console.log(burritos); // ['large', 4, true]

console.log(typeof burritos) // object