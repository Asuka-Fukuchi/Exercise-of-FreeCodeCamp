// Bingo! Letter
// Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

// Letter	Number Range
// "B"	1-15
// "I"	16-30
// "N"	31-45
// "G"	46-60
// "O"	61-75

function getBingoLetter(n) {
    if(1 <= n, n <=15) return "B"
    else if(16 <= n, n <=30) return "I"
    else if(31 <= n, n <=45) return "N"
    else if(46 <= n, n <=60) return "G"
    else if(61 <= n, n <=75) return "O"
    else "Please enter valid number"
}

console.log(getBingoLetter(75));
console.log(getBingoLetter(54));
console.log(getBingoLetter(25));
console.log(getBingoLetter(38));
console.log(getBingoLetter(11));