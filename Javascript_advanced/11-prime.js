// countPrimeNumbers function copied from 10-prime.js
function countPrimeNumbers() {
    let primeCount = 0;

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }

    return primeCount;
}

setTimeout(() => {
    const start = performance.now();

    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }

    const end = performance.now();

    console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
}, 0);
