function primeNumberCheker(number) {

    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(true);
    } else {
        console.log(false);
    }
}

primeNumberCheker(7);
primeNumberCheker(8);
primeNumberCheker(81);