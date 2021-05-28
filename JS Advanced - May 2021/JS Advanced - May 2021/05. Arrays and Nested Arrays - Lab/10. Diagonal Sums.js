function diagonalSums(inputArr) {

    let startIndex = 0;
    let endIndex = inputArr.length - 1;

    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    inputArr.forEach(row => {
        mainDiagonalSum += row[startIndex++];
        secondaryDiagonalSum += row[endIndex--];
    });

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
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