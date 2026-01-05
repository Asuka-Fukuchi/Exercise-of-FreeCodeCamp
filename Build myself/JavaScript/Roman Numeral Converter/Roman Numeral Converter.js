const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertRoman = () => {
    const inputValue = userInput.value.trim();
    let arabicNumber = parseInt(inputValue);

    if (inputValue === "" || Number.isNaN(arabicNumber)) {
        output.innerText = "Please enter a valid number";
        return;
    } else if (arabicNumber < 1) {
        output.innerText = "Please enter a number greater than or equal to 1";
        return;
    } else if (arabicNumber > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999";
        return;
    }

    const romanValues = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ]

    let romanized = "";

    for (let i = 0; i < romanValues.length; i++) {
        while (romanValues[i].value <= arabicNumber) {
            romanized += romanValues[i].symbol;
            arabicNumber -= romanValues[i].value;
        }
    }

    return output.innerText = romanized
}

convertBtn.addEventListener("click", convertRoman)