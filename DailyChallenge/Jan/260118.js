// Free Shipping
// Given an array of strings representing items in your shopping cart, and a number for the minimum order amount to qualify for free shipping, determine if the items in your shopping cart qualify for free shipping.

// The given array will contain items from the list below:

// Item	Price
// "shirt"	34.25
// "jeans"	48.50
// "shoes"	75.00
// "hat"	19.95
// "socks"	15.00
// "jacket"	109.95

function getsFreeShipping(cart, minimum) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        if(cart[i] === "shirt"){
            total += 34.25;
        } else if(cart[i] === "jeans"){
            total += 48.50;
        } else if(cart[i] === "shoes"){
            total += 75.00;
        } else if(cart[i] === "hat"){
            total += 19.95;
        } else if(cart[i] === "socks"){
            total += 15.00;
        } else if(cart[i] === "jacket"){
            total += 109.95;
        } else {
            continue;
        }
    }

    if(total > minimum){
        return true;
    } else{
        return false;
    }
}

console.log(getsFreeShipping(["shoes"], 50));
console.log(getsFreeShipping(["hat", "socks"], 50));
console.log(getsFreeShipping(["jeans", "shirt", "jacket"], 75));
console.log(getsFreeShipping(["socks", "socks", "hat"], 75));
console.log(getsFreeShipping(["shirt", "shirt", "jeans", "socks"], 100));
console.log(getsFreeShipping(["hat", "socks", "hat", "jeans", "shoes", "hat"], 200));


// スマートな解き方
// function getsFreeShipping(cart, minimum) {
//   const prices = {
//     shirt: 34.25,
//     jeans: 48.50,
//     shoes: 75.00,
//     hat: 19.95,
//     socks: 15.00,
//     jacket: 109.95,
//   };

//   let total = 0;

//   for (let i = 0; i < cart.length; i++) {
//     total += prices[cart[i]] ?? 0;
//   }

//   return total >= minimum;
// }