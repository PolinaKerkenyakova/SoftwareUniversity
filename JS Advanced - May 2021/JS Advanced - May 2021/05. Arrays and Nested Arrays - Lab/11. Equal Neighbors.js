function equalNeighbors(matrix) {
    
    let equalNeighborsCounter = 0;

    matrix.forEach((array, arrayIndex) => {
        array.forEach((currElement, currElementIndex) => {
            let nextElement = array[currElementIndex + 1];

            if (currElement === nextElement) {
                equalNeighborsCounter++;
            }

            let arrayBelowCurrOne = matrix[arrayIndex + 1];
            if (arrayBelowCurrOne !==  undefined) {
                let elementBelowCurrOne = arrayBelowCurrOne[currElementIndex];

                if (currElement === elementBelowCurrOne) {
                    equalNeighborsCounter++;
                }
            }
        });
    });

    return equalNeighborsCounter;
}

equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);