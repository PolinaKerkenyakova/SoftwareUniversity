function mergeArrays(firstArray, secondArray) {


    let modifiedArray = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (i % 2 === 0) {
            modifiedArray[i] = Number(firstArray[i]) + Number(secondArray[i]);
        } else {
            modifiedArray[i] = firstArray[i] + secondArray[i];
        }
    }

    console.log(modifiedArray.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);