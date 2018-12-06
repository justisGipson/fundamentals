// FUNCTIONS

// Functions are a set of statements that perform a task or calculates a value

// Declarations

function hi() {
    console.log('HI');
};

// Expression

let x = function hi() {
    console.log('I already said hi...');
};

// Declarations == Hoisted
// Expressions != Hoisted

function num(){
    for(let i = 1; i<=10; i++) {
    console.log(i)
    }
};
num();


// given an array that lists out the indidvidual values

let arr = ['this', 'is', 'really', 'cool'];

function printArr() {
    for (word in arr){
    console.log(arr[word]);
    }
};

printArr();