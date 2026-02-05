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