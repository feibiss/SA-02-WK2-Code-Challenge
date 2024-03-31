

function findPrimes(arr) {
  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false; // 1 or less is not prime
    if (num <= 3) return true; // 2 and 3 are prime

    // Only check for divisibility up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  // Filter the original array to keep only prime numbers
  return arr.filter(num => isPrime(num));
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = findPrimes(numbers);
console.log(primes); // Output: [2, 3, 5, 7]