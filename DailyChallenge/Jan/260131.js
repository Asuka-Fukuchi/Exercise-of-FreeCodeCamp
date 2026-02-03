// Zodiac Finder
// Given a date string in the format "YYYY-MM-DD", return the zodiac sign for that date using the following chart:

// Date Range	Zodiac Sign
// March 21 - April 19	"Aries"
// April 20 - May 20	"Taurus"
// May 21 - June 20	"Gemini"
// June 21 - July 22	"Cancer"
// July 23 - August 22	"Leo"
// August 23 - September 22	"Virgo"
// September 23 - October 22	"Libra"
// October 23 - November 21	"Scorpio"
// November 22 - December 21	"Sagittarius"
// December 22 - January 19	"Capricorn"
// January 20 - February 18	"Aquarius"
// February 19 - March 20	"Pisces"
// Zodiac signs are based only on the month and day, you can ignore the year.

function getSign(dateStr) {
    const [, month, day] = dateStr.split("-").map(Number);
    // 3月21日 → 321
    const md = month * 100 + day;

    const signs = [
        { start: 120, name: "Aquarius" },
        { start: 219, name: "Pisces" },
        { start: 321, name: "Aries" },
        { start: 420, name: "Taurus" },
        { start: 521, name: "Gemini" },
        { start: 621, name: "Cancer" },
        { start: 723, name: "Leo" },
        { start: 823, name: "Virgo" },
        { start: 923, name: "Libra" },
        { start: 1023, name: "Scorpio" },
        { start: 1122, name: "Sagittarius" },
        { start: 1222, name: "Capricorn" }
    ];

    let result = "Capricorn";

    for (const s of signs) {
        if (md >= s.start) {
            result = s.name;
        }
    }

    return result;
}

console.log(getSign("2026-01-31"));
console.log(getSign("2001-06-10"));
console.log(getSign("1985-09-07"));
console.log(getSign("2023-03-19"));
console.log(getSign("2045-11-05"));
console.log(getSign("1985-12-06"));
console.log(getSign("2025-12-30"));
console.log(getSign("2018-10-08"));
console.log(getSign("1958-05-04"));