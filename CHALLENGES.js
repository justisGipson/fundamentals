// Fizz Buzz with a for loop

for(let i = 0; i<= 100; i++){
    var isDivByThree = i % 3 === 0;
    var isDivByFive = i % 5 === 0;
    if(isDivByThree && isDivByFive) {
        console.log('FizzBuzz');
    } else if (isDivByThree) {
        console.log('Fizz');
    } else if ( isDivByFive) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
};

// Challenge
// Creat a list (with an array) of movies
// use .forEach() to list movies
// add another movie at the end
// and replace one of your existing movies with another one.

let movies = ['Aliens', 'Dune', 'Star Wars', '36 Chambers'];
movies.push('Back to the Future');
movies.splice(1, 1, 'The Good, The Bad, and the Ugly')
movies.forEach(m => { console.log(m); })

// Challenge
// Create array
// flip the values within the array ( what was in index 4 is now in index 0, 3 to 1, etc...)
// using a method only, print the values of the newly arranged array

let movies = ['Aliens', 'Dune', 'Star Wars', '36 Chambers', 'Back to the Future'];
console.log(movies instanceof Array === true)
movies.reverse(movies);
movies.forEach(m => {console.log(m); });

// Make a function that takes in two arrays, and adds the first arry to the second

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
function addArray (one, two) {
    for (let i = 0; i < two.length; i ++){
        one.push(two[i]);
    }
    return one;
};
let newArray = addArray(arr1, arr2);
console.log(newArray);
