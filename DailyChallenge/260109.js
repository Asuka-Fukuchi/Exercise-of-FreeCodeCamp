// Circular Prime
// Given an integer, determine if it is a circular prime.

// A circular prime is an integer where all rotations of its digits are themselves prime.

// For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.

function isCircularPrime(n) {
    if (n < 2) return false;

    function isPrime(num) {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let str = String(n);

    for (let i = 0; i < str.length; i++) {
        const rotatedNum = Number(str);

        if (!isPrime(rotatedNum)) {
            return false;
        }

        str = str.slice(1) + str[0];
    }

    return true;
}

console.log(isCircularPrime(197));
console.log(isCircularPrime(23));
console.log(isCircularPrime(13));
console.log(isCircularPrime(89));
console.log(isCircularPrime(1193));