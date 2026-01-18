// vOwElcAsE
// Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

// Vowels are "a", "e", "i", "o", and "u" in any case.
// Non-alphabetical characters should remain unchanged.

function vowelCase(str) {
    let arr = str.split("");
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "a" || arr[i] === "i" || arr[i] === "u" || arr[i] === "e" || arr[i] === "o" 
            || arr[i] === "A" || arr[i] === "I" || arr[i] === "U" || arr[i] === "E" || arr[i] === "O"
        ){
            arr[i] = arr[i].toUpperCase();
        } else{
            arr[i] = arr[i].toLowerCase();
        }
    }
    const result = arr.join(""); 
  return result;
}

console.log(vowelCase("vowelcase"));
console.log(vowelCase("coding is fun"));
console.log(vowelCase("HELLO, world!"));
console.log(vowelCase("git cherry-pick"));
console.log(vowelCase("HEAD~1"));