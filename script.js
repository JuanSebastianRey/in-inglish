function reverseString() {
    const inputString = document.getElementById("input-string").value;
    const reversedString = inputString.split("").reverse().join("");
    document.getElementById("result").textContent = `Reversed string: ${reversedString}`;
  }