function getFibonator() {

    let previousNum = 0;
    let sum = 0

    function fib() {
        let sum = previousNum + currNum;
        previousNum = sum;

        previousNum = currNum;
        currNum += sum
        return sum
    }

    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13