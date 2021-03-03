function division(number) {

    let divider = 0;
    let isNotDivisible = false;

    if (number % 10 === 0) {
        divider = 10;
    } else if (number % 7 === 0) {
        divider = 7;
    } else if (number % 6 === 0) {
        divider = 6;
    } else if (number % 3 === 0) {
        divider = 3;
    } else if (number % 2 === 0) {
        divider = 2;
    } else {
        isNotDivisible = true;
    }

    if (isNotDivisible) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${divider}`);
    }
}

division(30);
division(15);
division(12);
division(1643);