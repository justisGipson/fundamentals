// var x = 12;

// function scope() {
//     x = 33;
//     console.log(x);
// }

// scope();
// console.log(x); 

const x = 12;

function scope() {
    const x = 33
    if (true) {
        const x = 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);

/*
    variable grammer    obeys functional scope  obeys block scope   can be mutated (changed after initialization)
    var                 x                       -                   x
    let                 x                       x                   x
    const               x                       x                   -
*/

