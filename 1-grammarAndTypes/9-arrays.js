// What is an array?
// has [] brackets
// can hold multiple datatypes
// great for listing

let students = ['Tony', 'Marshal', 'Randy', 'Ray', 23, true, ['Ryan', 'Iesha']];
// console.log(typeof students);
// console.log(students instanceof Array);
// console.log(students[2]);
// console.log(students[6][0]);


let name = students[6][1];
console.log(`Hello ${name}, you look nice today!`);

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
for (f in food) {
    // console.log(food[f])
};

food.push('porkchop');
for(f in food){
    // console.log(food[f])
};

food.splice(1, 1, 'Bananas');
for(f in food){
    // console.log(food[f])
};

food.splice(2, 0, 'Tacos');
for(f in food){
    console.log(food[f])
};

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
food.pop()
for (f in food) {
    // console.log(food[f])
};

// food.forEach(f => {console.log(f); })
food.forEach((food, number) => {console.log(number); console.log(food); })

let long = [0,1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length);
console.log(typeof colors);
console.log(typeof colors.toString());
colors.forEach(c => console.log(c))