// Integer Hypotenuse
// Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

// The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).

function isIntegerHypotenuse(a, b) {
    // Math.sqrt: 平方根を求める
    const c = Math.sqrt(a * a + b * b);
    //　Number.isInteger:　整数かどうかの判定
    return Number.isInteger(c);
}

console.log(isIntegerHypotenuse(3, 4));
console.log(isIntegerHypotenuse(2, 3));
console.log(isIntegerHypotenuse(5, 12));
console.log(isIntegerHypotenuse(10, 10));
console.log(isIntegerHypotenuse(780, 1040));
console.log(isIntegerHypotenuse(250, 333));