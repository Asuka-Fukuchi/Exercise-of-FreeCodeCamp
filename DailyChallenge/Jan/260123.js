// Hex Validator
// Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

// Start with a #, and
// be followed by either 3 or 6 hexadecimal characters.
// Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).

function isValidHex(str) {
    if (str[0] !== "#") return false;

    if (str.length !== 4 && str.length !== 7) return false;

    const hexPart = str.slice(1);
    const allowed = "0123456789abcdefABCDEF";

    return [...hexPart].every(char => allowed.includes(char));
}

console.log(isValidHex("#123"));
console.log(isValidHex("#123abc"));
console.log(isValidHex("#ABCDEF"));
console.log(isValidHex("#0a1B2c"));
console.log(isValidHex("#12G"));
console.log(isValidHex("#1234567"));
console.log(isValidHex("#12 3"));
console.log(isValidHex("fff"));

// 最適解
// function isValidHex(str) {
//     return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(str);
// }