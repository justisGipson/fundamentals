let student = {name: 'justis', awesome: true, course: 'JavaScript'};
for(item in student) {
    console.log(item);
    console.log(student[item]);
};

let catArray = ['tabby', 'burmese', 'ragdoll', 'tortie'];
for(cat in catArray) {
    console.log(cat);
};

let name = 'jusTIs';
let capName;
for(letter in name){
    (letter == 0) ? capName = name[letter].toUpperCase() : capName += name[letter].toLowerCase();
};
console.log(capName);