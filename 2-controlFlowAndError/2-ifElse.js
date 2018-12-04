let weather = 75;
if(weather < 70) {
    console.log('wear a jacket')
} else {
    console.log('no jacket needed')
}

// let myName = 'Justis';
// if(name = myName) {
//     console.log(`Hello, my name is ${myName}.`)
// } else {
//     console.log(`Hello, what is your name?`)
// }

// function capFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// console.log(capFirstLetter('justis'));

let name = 'justis';
if(name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
};

// ********************************************* //

// Else if

let age = 33;
if(age <= 17) {
    console.log("You're too young to do anything");
} else if (age <= 21) {
    console.log('Yay! You can vote!');
} else if (age <= 25) {
    console.log('Yay! You can drink!');
} else {
    console.log('Yay! You can rent a car!');
}