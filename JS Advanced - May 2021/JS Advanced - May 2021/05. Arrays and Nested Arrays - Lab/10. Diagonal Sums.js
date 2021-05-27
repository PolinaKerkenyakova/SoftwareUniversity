function diagonalSums(inputArr) {

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    let firstIndex = 0;
    let endIndex = inputArr[0].length - 1;

    inputArr.forEach(array => {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[endIndex--]
    });

    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

diagonalSums([
    [20, 40],
    [10, 60]
]);

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);