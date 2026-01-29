// Letters-Numbers
// Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.

function separateLettersAndNumbers(str) {
    let result = "";
    result += str[0];

    for (let i = 1; i < str.length; i++) {
        const prev = str[i - 1];
        const current = str[i];

        const prevIsLetter = /[a-zA-Z]/.test(prev);
        const currentIsLetter = /[a-zA-Z]/.test(current);

        if (prevIsLetter !== currentIsLetter) {
            result += "-";
        }

        result += current;
    }

    return result;
}

console.log(separateLettersAndNumbers("ABC123"));
console.log(separateLettersAndNumbers("Route66"));
console.log(separateLettersAndNumbers("H3LL0W0RLD"));
console.log(separateLettersAndNumbers("a1b2c3d4"));