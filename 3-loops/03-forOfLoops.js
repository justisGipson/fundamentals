/*
var student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript"        this doesnt work! Objects are not iterable!
};

for(item of student){
    console.log(item);
}
*/

let catArray = ["Tabby", "Burmese", "Ragdoll", "tortie"];

for(cat of catArray){
    console.log(cat);
}

let heroArray = ["Superman", "Batman", "Wonder Woman"];

for(hero of heroArray){
    console.log(`${hero} is super cool!`);    //${hero} is a template string
};