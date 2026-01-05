const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


const isPalindrome = () => {
  const originalInput = textInput.value;
  const cleanedInput = originalInput.replace(/[^a-z]0-9/gi, "").toLowerCase();
  const reverseWord = cleanedInput.split("").reverse().join("");

  if (!cleanedInput) {
    alert("Please input a value");
    return;
  } else if (cleanedInput === reverseWord) {
    result.innerHTML = originalInput + " is a palindrome";
  } else {
    result.innerHTML = originalInput + " is not a palindrome";
  }

}

checkBtn.addEventListener("click", isPalindrome);
