// PascalCase Challenge
// create a function to take in one paramenter ex: "i am a student at eleven fifty."
// Split up the string into individuyal words
// Capitalize the first letter of each word
// Return the new string

let str = "i am a student at eleven fifty!";
function pascalCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}
console.log(pascalCase(str));

