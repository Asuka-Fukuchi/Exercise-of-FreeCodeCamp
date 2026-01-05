const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const telephoneValidator = () => {
    const inputValue = userInput.value;
    if (!inputValue) {
        alert("Please provide a phone number")
        return;
    }

    const pattern1 = /^1\s?\d{3}\s?\d{3}\s?\d{4}$/;
    const pattern2 = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
    const pattern3 = /^\d{10}$/;
    const pattern4 = /^\d{3}-\d{3}-\d{4}$/;
    const pattern5 = /^\(\d{3}\)\d{3}-\d{4}$/;
    const pattern6 = /^1\s?\(\d{3}\)\d{3}-\d{4}$/;
    const pattern7 = /^1\s\d{3}-\d{3}-\d{4}$/;

    const patterns = [pattern1, pattern2, pattern3, pattern4, pattern5, pattern6, pattern7];

    for (const pattern of patterns) {
        if (pattern.test(inputValue)) {
            result.innerHTML = `Valid US number: ${inputValue}`;
            return;
        }
    }
    result.innerHTML = `Invalid US number: ${inputValue} `;
}


checkBtn.addEventListener("click", telephoneValidator)

clearBtn.addEventListener("click", () => {
    result.textContent = "";
})