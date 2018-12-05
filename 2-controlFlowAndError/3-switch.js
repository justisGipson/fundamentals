/* 
SWITCH
Switch statements helps us choose between several options for a variable and a default.
Four main parts to a switch statement:
switch- the argument being evaluated.
case- one of the options for the variable to be.
break- this breaks us out of the switch statement once we hit our case.
default- the default if we don't hit one of our cases, not necessary.
*/

// let friend = 'Dave';
// switch (friend) {
//     case 'Autumn':
//         console.log('Hey...');
//         break;
//     case 'Dave':
//         console.log('Hey, how is Cooper?');
//         break;
//     case 'Alecx':
//         console.log('Are we playing DnD?');
//         break;
//     default:
//         console.log(`Sorry ${friend}, I don't know you.`)
// }

let friend = 'Scott';
switch (friend) {
    case 'Audra':
    console.log("Hey, what's up?");
    break;
    case 'Scott':
    console.log("Let's get beers!");
    break;
    case 'Drew':
    console.log("Let's blow some glass!");
    break;
    case 'Greg':
    console.log("Will you help me move?")
    default:
    console.log(`Sorry ${friend}, but I don't know you...`)
}

let yep = -8;

switch(true) {
    case (yep < 0 && yep > -10):
    console.log('works');
    break;
    case (yep > 0):
    console.log('works!');
    break;
    default:
    console.log('nope');
}

/*
    TERNARY
A Ternary is a way to write single line if/else statements
*/

let x = 6;
(x>0) ? console.log('yes') : console.log('no');

(x == 0) ? console.log('Hello') : (x < 0) ? console.log('hi') : console.log('goodbye')

// Ternary Challenge

let age = 30;
(age >= 25) ? console.log('You can rent a car.') : (age >= 21) ? console.log('Yay! You can drink.') : (age >= 17) ? console.log('Yay! You can vote!') : console.log('You are too young to do anything fun.');