function solution(a) {
    let sum = a;
    return function calc(b) {
        sum = a;
        sum += b;
        return sum;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));