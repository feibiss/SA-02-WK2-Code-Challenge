

function swapCase(text) {
  
  let newString = "";
  for (let char of text) {
    if (char === char.toUpperCase()) {
      // If the character is uppercase, convert it to lowercase
      newString += char.toLowerCase();
    } else {
      // If the character is lowercase, convert it to uppercase
      newString += char.toUpperCase();
    }
  }
  return newString;
}

// Output
const text = "The Quick Brown Fox";
const swappedText = swapCase(text);
console.log(swappedText); // Output: "tHE qUICK bROWN fOX"