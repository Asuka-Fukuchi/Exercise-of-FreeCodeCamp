// Consonant Case
// Given a string representing a variable name, convert it to consonant case using the following rules:

// All consonants should be converted to uppercase.
// All vowels (a, e, i, o, u in any case) should be converted to lowercase.
// All hyphens (-) should be converted to underscores (_).

function toConsonantCase(str) {
    let newStr = [];
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === "-"){
            newStr.push("_");
        } else if(vowels.includes(str[i])){
            newStr.push(str[i].toLowerCase());
        } else {
            newStr.push(str[i].toUpperCase());
        }
    }

    return newStr.join("");
}

console.log(toConsonantCase("helloworld"));
console.log(toConsonantCase("HELLOWORLD"));
console.log(toConsonantCase("_hElLO-WOrlD-"));
console.log(toConsonantCase("_~-generic_~-variable_~-name_~-here-~_"));