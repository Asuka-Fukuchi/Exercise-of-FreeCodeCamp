// Nth Fibonacci Number
// Given an integer n, return the nth number in the fibonacci sequence.

// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

function nthFibonacci(n) {
    if (n <= 1) return 0;
    if (n === 2) return 1;

    let a = 0;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        const next = a + b;
        a = b;
        b = next;
    }

    return b;
}

// function nthFibonacci(n) {
//     if (n <= 1) return 0;
//     if (n === 2) return 1;
//     return nthFibonacci(n - 1) + nthFibonacci(n - 2);
// }

console.log(nthFibonacci(4));
console.log(nthFibonacci(10));
console.log(nthFibonacci(15));
console.log(nthFibonacci(40));
console.log(nthFibonacci(75));