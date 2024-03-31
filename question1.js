

function swapCase(str) {
    return str
      .split("").map((char) =>
        /[a-z]/.test(char)
          ? char.toUpperCase()
          : /[A-Z]/.test(char)
          ? char.toLowerCase()
          : char
      )
      .join("");
  }
  
  // Example usage
  const inputString = "The Quick Brown Fox";
  const swappedString = swapCase(inputString);
  console.log(swappedString); // Output: "tHE qUICK bROWN fOX"