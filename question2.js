

function getArray(start, end) {
 
  if (start > end) {
    const numbers = [];
    for (let num = end; num <= start; num++) {
      numbers.push(num);
    }
    return numbers;
  } else {
    const numbers = [];
    for (let num = start; num <= end; num++) {

      numbers.push(num);
    }
    return numbers;
  }
}

// Output:
console.log(getArray(4, 7)); 
console.log(getArray(-4, 7)); 