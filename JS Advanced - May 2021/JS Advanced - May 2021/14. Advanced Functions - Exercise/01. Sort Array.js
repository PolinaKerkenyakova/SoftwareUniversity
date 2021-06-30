function sortArray(inputArr, sortingCriteria) {

    let sortMethods  = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    }

    return inputArr.sort(sortMethods[sortingCriteria]);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));