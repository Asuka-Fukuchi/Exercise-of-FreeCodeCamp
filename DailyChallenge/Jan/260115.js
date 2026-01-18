// Array Swap
// Given an array with two values, return an array with the values swapped.

// For example, given ["A", "B"] return ["B", "A"]

function arraySwap(arr) {
    const reverse = arr.reverse();
    return reverse;
}

console.log(arraySwap(["A", "B"]));
console.log(arraySwap([25, 20]));
console.log(arraySwap([true, false]));
console.log(arraySwap(["1", 1]));