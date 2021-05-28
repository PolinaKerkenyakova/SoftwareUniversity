function extractSubsequenceFromArray(inputArr) {

    let numberArr = []

    let reducer = ((a, curr) => {
        if (a < curr) {
            numberArr.push(a);

            return a = curr;
        } else {
            return a;
        }
    });

    inputArr.reduce(reducer)

   return numberArr;
}

extractSubsequenceFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);

extractSubsequenceFromArray([
    1,
    2,
    3,
    4
]);

extractSubsequenceFromArray([
    20,
    3,
    2,
    15,
    6,
    1
]);