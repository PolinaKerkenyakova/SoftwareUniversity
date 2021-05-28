// function extractSubsequenceFromArray(inputArr) {

//     let subsequence = [];
//     let lastBigNum = Number.MIN_SAFE_INTEGER;

//     for (let num of inputArr) {
//         if (num >= lastBigNum) {
//             lastBigNum = num;
//             subsequence.push(lastBigNum);
//         }
//     }

//     return subsequence;
// }


function extractSubsequenceFromArray(inputArr) {
       return inputArr.reduce((accArr, curr) => {

        let acc = accArr[accArr.length - 1];
        if (acc <= curr || accArr.length === 0) {
            accArr.push(curr)
        }

        return accArr;
       }, []);
}

console.log(extractSubsequenceFromArray([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));

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