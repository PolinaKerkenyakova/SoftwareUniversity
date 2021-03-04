function solution(number) {

    let numString = number.toString();
    let result = oddAndEvenSum(numString);

    console.log(result);

    function oddAndEvenSum(str) {
        let evenSum = 0;
        let oddSum = 0;
        for (let i = 0; i < str.length; i++) {
            if (Number(str[i]) % 2 === 0) {
                evenSum += Number(str[i]);
            } else {
                oddSum += Number(str[i]);
            }
        }

        return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    }
}

solution(1000435);
solution(3495892137259234);