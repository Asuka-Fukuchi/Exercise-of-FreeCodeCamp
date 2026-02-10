// 2026 Winter Games Day 5: Cross-Country Skiing
// Given an array of finish times for a cross-country ski race, convert them into times behind the winner.

// Given times are strings in "H:MM:SS" format.
// Given times will be in order from fastest to slowest.
// The winners time (fastest time) should correspond to "0".
// Each other time should show the time behind the winner, in the format "+M:SS".
// For example, given ["1:25:32", "1:26:10", "1:27:05"], return ["0", "+0:38", "+1:33"].

function getRelativeResults(results) {
    let newArr = [];
    const [fastestHours, fastestMinutes, fastestSeconds] = results[0].split(":").map(Number);
    const fastestTotalSeconds = fastestHours * 3600 + fastestMinutes * 60 + fastestSeconds;
    for (let i = 0; i < results.length; i++) {
        const [hours, minutes, seconds] = results[i].split(":").map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const differ = totalSeconds - fastestTotalSeconds;
        
        if (differ === 0) {
            newArr.push("0");
        } else {
            const differMinutes = Math.floor(differ / 60);
            const differSeconds = differ % 60;
            const time =
                "+" +
                differMinutes +
                ":" +
                String(differSeconds).padStart(2, "0");
            newArr.push(time);
        }       
    }

    return newArr;
}

console.log(getRelativeResults(["1:25:32", "1:26:10", "1:27:05"]));
console.log(getRelativeResults(["1:00:01", "1:00:05", "1:00:10"]));
console.log(getRelativeResults(["1:10:06", "1:10:23", "1:10:48", "1:12:11"]));
console.log(getRelativeResults(["0:49:13", "0:49:15", "0:50:14", "0:51:30", "0:51:58", "0:52:16", "0:53:12", "0:53:31", "0:56:19", "1:02:20"]));
console.log(getRelativeResults(["2:01:15", "2:10:45", "2:10:53", "2:11:04", "2:11:55", "2:13:27", "2:14:30", "2:15:10"]));
