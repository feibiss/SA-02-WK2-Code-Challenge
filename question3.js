

// Function to check if a number is prime

function findPrimes(numbers) {
  const primeNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    // Check for 1 and negative numbers)
    if (number <= 1) {
      continue;
    }

    // Check for divisibility by 2 (only even prime is 2)
    if (number % 2 === 0) {
      if (number === 2) {
        primeNumbers.push(number);
      }
      continue;
    }


    let isPrime = true;
    for (let j = 3; j * j <= number; j += 2) {
      if (number % j === 0) {
        isPrime = false;
        break;
      }
    }

    // If no divisors found, it's prime
    if (isPrime) {
      primeNumbers.push(number);
    }
  }

  return primeNumbers;
}

// output
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = findPrimes(numbers);
console.log(primes); // Output: [2, 3, 5, 7]