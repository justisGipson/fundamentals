// regular function
function coffee(){
    console.log('I always need coffee')
};
coffee();

// Arrow function
const coffee = () => {
    console.log('coffee is great')
}
coffee();

//  0r for simple one-line arrow function... (concise arrown function)

const coffee = () => console.log('I need coffee!');
coffee();

// Concise arrow function with a parameter...

const favMovie = (movie) => console.log(`My favorite movie is ${movie}`);
favMovie('Dune');

// Returns...

function capitalName(name){
    let capName = '';
    for(let l in name){
        if(l == 0){
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    // console.log(capName)
    return capName
};
const newName = capitalName('jusTIS');
console.log(`${newName} is my name.`);

// Challenge- make a tip calculator using a function, have it return that value, capture the returned value in a variable, print that variable...
const tipCalc = (bill) => {
    tip = (bill * 0.2)
   return Math.floor(tip);
};

let totalTip = tipCalc(55.50);
console.log(totalTip);