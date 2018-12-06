// Parameters are like empty storage boxes, can be named whatever we want. They need to use the same name inside of the function.

// We can also have multiple parameters for a singele function. We provide that parameter when we call the function.

function pet(animal) {
    console.log(`I have a ${animal} for a pet`)
};

pet('dog');

function hobby(stuff1, stuff2) {
    console.log(`When I'm not coding, I like to ${stuff1} or go ${stuff2}.`)
};

hobby('blow glass', 'backpacking');

function fullName(firstName, lastName) {
    let name = firstName + ' ' + lastName
    console.log(`Hello, my name is ${name}.`)
};

fullName('Tom', 'McClellan');