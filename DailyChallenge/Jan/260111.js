// Par for the Hole
// Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

// Return:

// "Hole in one!" if it took one stroke.
// "Eagle" if it took two strokes less than par.
// "Birdie" if it took one stroke less than par.
// "Par" if it took the same number of strokes as par.
// "Bogey" if it took one stroke more than par.
// "Double bogey" if took two strokes more than par.

function golfScore(par, strokes) {
    if(strokes === 1){
        return "Hole in one!";
    } else if(strokes + 2 === par){
        return "Eagle";
    } else if(strokes + 1 === par){
        return "Birdie";
    } else if(strokes === par){
        return "Par";
    } else if(strokes - 1 === par){
        return "Bogey";
    } else if (strokes - 2 === par){
        return "Double bogey";
    }
}

console.log(golfScore(3, 3));
console.log(golfScore(4, 3));
console.log(golfScore(3, 1));
console.log(golfScore(5, 7));
console.log(golfScore(4, 5));
console.log(golfScore(5, 3));