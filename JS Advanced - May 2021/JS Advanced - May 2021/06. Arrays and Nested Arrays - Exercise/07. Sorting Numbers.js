function sortingNumbers(inputArr) {

    let modifiedArray = [];

    let sortedAscending = inputArr.sort((a, b) => a - b);
    let rotation = sortedAscending.length / 2

    for (let i = 0; i < rotation; i++) {
        let acsending = sortedAscending.shift();
        let descending = sortedAscending.pop();
        modifiedArray.push(acsending, descending)
    }

    return modifiedArray;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);