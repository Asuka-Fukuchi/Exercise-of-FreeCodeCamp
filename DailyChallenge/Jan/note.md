# Free Code Camp Daily Challenge(January)
## 1/1 ★☆☆～★★☆
AIに聞いた気もする
## 1/2 ★☆☆～★★☆
フィボナッチ数列
## 1/3 ★★☆
AIに回答してもらった。
## 1/4 ★☆☆
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}
## 1/5 ★☆☆
const minPSI = rangeBar[0] * 14.5038;
const maxPSI = rangeBar[1] * 14.5038;
for (let p of pressuresPSI) {
    if (p < minPSI) status.push("Low");
    else if (p > maxPSI) status.push("High");
    else status.push("Good");
}
## 1/6 ★☆☆～★★☆
const vowels = /[aeiou]/i;
if (vowels.test(arr[i])) arr[i] = arr[i].toUpperCase();
else arr[i] = arr[i].toLowerCase();
## 1/7 ★★☆
AIに回答してもらった。
## 1/8 ★☆☆
並び替え問題。AIに回答してもらった。
## 1/9 ★★☆～★★★
AIに回答してもらった。
## 1/10 ★★☆～★★★
●×ゲームの問題。AIに回答してもらった。
## 1/11 ★☆☆
function golfScore(par, strokes) {
    if(strokes === 1) return "Hole in one!";

    const diff = strokes - par;

    switch(diff){
        case -2: return "Eagle";
        case -1: return "Birdie";
        case 0: return "Par";
        case 1: return "Bogey";
        case 2: return "Double bogey";
        default: return diff < -2 ? "Albatross" : "Ouch"; // optional: その他のスコア
    }
}
## 1/12 ★★☆
function getNumberOfPlants(fieldSize, unit, crop) {
  const units = { acres: 4046.86, hectares: 10000 };
  const crops = { corn: 1, wheat: 0.1, soybeans: 0.5, tomatoes: 0.25, lettuce: 0.2 };

  if (!units[unit] || !crops[crop]) return "Please give us the right word";

  const area = fieldSize * units[unit];
  return Math.trunc(area / crops[crop]);
}
## 1/13 ★☆☆
return n % 2 === 0 ? "Even" : "Odd";
## 1/14 ★★☆
正規表現をAIに書いてもらって解答
## 1/15 ★☆☆
.reverse()
## 1/16 ★☆☆
Math.sqrt
Number.isInteger
## 1/17 ★★☆　ナイトの稼働範囲
AIに解いてもらった。
## 1/18 ★☆☆
function getsFreeShipping(cart, minimum) {
    const prices = {
        shirt: 34.25,
        jeans: 48.50,
        shoes: 75.00,
        hat: 19.95,
        socks: 15.00,
        jacket: 109.95
    };

    const total = cart.reduce((sum, item) => sum + (prices[item] || 0), 0);

    return total > minimum;
}

let total = 0;
for(const item of cart){
    total += prices[item] || 0;
}

## 1/19 ★☆☆
function compareEnergy(caloriesBurned, wattHoursUsed) {
    const calorieJ = caloriesBurned * 4184;
    const wattJ = wattHoursUsed * 3600;
    return calorieJ > wattJ ? "Workout" : calorieJ < wattJ ? "Devices" : "Equal";
}

const CAL_TO_J = 4184;
const WH_TO_J = 3600;

## 1/20 ★☆☆
.includes()

function toConsonantCase(str) {
    return str.replace(/-/g, "_")
              .replace(/[aeiou]/gi, m => m.toLowerCase())
              .replace(/[^aeiou_]/gi, m => m.toUpperCase());
}
## 1/21 ★★☆
正規表現の基本構文

(.*?) → 非貪欲で任意文字をキャプチャ

/g → グローバル置換

$1 → キャプチャした内容を参照

文字列置換 (replace) の応用
## 1/22 ★★☆
const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;

const grades = [
  {min: 97, grade: "A+"}, {min: 93, grade: "A"}, {min: 90, grade: "A-"},
  {min: 87, grade: "B+"}, {min: 83, grade: "B"}, {min: 80, grade: "B-"},
  {min: 77, grade: "C+"}, {min: 73, grade: "C"}, {min: 70, grade: "C-"},
  {min: 67, grade: "D+"}, {min: 63, grade: "D"}, {min: 60, grade: "D-"}
];

for (const g of grades) {
  if (average >= g.min) return g.grade;
}
return "F";


## 1/23 ★★☆
if (str.length !== 4 && str.length !== 7) return false;までは自力で書いてその後は色んなコードを書いてみたがどれも期待する結果にならず最終的にAIに解いてもらった

function isValidHex(str) {
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(str);
}
## 1/24 ★☆☆
function getBingoLetter(n) {
    const letters = ["B","I","N","G","O"];
    if (n < 1 || n > 75) return "Please enter valid number";
    return letters[Math.floor((n-1)/15)];
}
## 1/25 ★☆☆
function scaleImage(size, scale) {
    const [w, h] = size.split("x").map(Number);
    return `${w * scale}x${h * scale}`;
}
## 1/26 ★☆☆　割り切れるか
return (n % 3 === 0 && n % 5 === 0) ? "FizzBuzz" :
       (n % 3 === 0) ? "Fizz" :
       (n % 5 === 0) ? "Buzz" :
       n.toString();
## 1/27 ★☆☆～★★☆
.getUTCDate()
return day % 2 === 0 ? "even" : "odd";
## 1/28 ★☆☆　配列の展開
.flat(Infinity)
## 1/29 ★★☆　隣同士の型が違ったらハイフンを足す
やりたいことは思い浮かんだけどコードに落とし込む技術がなくAIに解いてもらった
## 1/30 ★★☆ ポーンを動かせる範囲
## 1/31 ★★☆ 星座チェック
条件分岐を大量に書く解き方なら解けるが、そうでない解き方で自力で解くのは難しかったのでAIに条件分岐が少なく済む解き方を聞いた。

## 総評
レベル1.5ぐらいが自力で解けるかどうかのライン
正規表現が苦手
For ofが良くわからない。
コードが冗長