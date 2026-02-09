# Free Code Camp Daily Challenge(February)
## 2/1 ★★★
自力で解けなかった
複数条件を分解して処理
## 2/2 ★☆☆〜★★☆
true / false と truthy / falsy
## 2/3 ★☆☆
文字列反転
split("").reverse().join("")

## 2/4 ★☆☆
function truncateText(text) {
    return text.length <= 20
        ? text
        : text.slice(0, 17) + "...";
}

## 2/5 ★☆☆〜★★☆
for (const coin of change) {
    total += coin;
}

const total = change.reduce((sum, coin) => sum + coin, 0);

## 2/6 ★☆☆
別解
function getFlag(code) {
    return [...code.toUpperCase()]
        .map(char => 127397 + char.charCodeAt())
        .map(codePoint => String.fromCodePoint(codePoint))
        .join("");
}

## 2/7 ★★☆
別解
function getLandingStance(startStance, rotation) {
    const normalized = Math.abs(rotation) % 360;

    if (normalized === 180) {
        return startStance === "Regular" ? "Goofy" : "Regular";
    }

    return startStance;
}

Math.abs()（絶対値）
Math.abs(5)    // 5
Math.abs(-5)   // 5
Math.abs(180)  // 180
Math.abs(-180) // 180

## 2/8 ★☆☆
余計な条件分岐を書いてしまった。
function calculatePenaltyDistance(rounds) {
  let miss = 0;

  for (const hits of rounds) {
    miss += 5 - hits;
  }

  return miss * 150;
}

別解
function calculatePenaltyDistance(rounds) {
  const totalMiss = rounds.reduce((sum, hits) => {
    return sum + (5 - hits);
  }, 0);

  return totalMiss * 150;
}

## 2/9 ★★☆
メダル判定。自力で解いた。
ソートしたけどソート不要。
    for (const score of competitor) {
        if (score > myScore) {
            higherCount++;
        }
    }

もっと簡単な解き方
const allScores = [...competitor, myScore];
allScores.sort((a, b) => b - a);

const rank = allScores.indexOf(myScore);