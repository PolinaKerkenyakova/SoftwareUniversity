function positiveOrNegativeNums(arrInput) {

    let modifiedArray = [];

    for (let element of arrInput) {

        if (element < 0) {
            modifiedArray.unshift(element);
        } else {
            modifiedArray.push(element);
        }
    }

    console.log(modifiedArray.join('\n'))
}

positiveOrNegativeNums([7, -2, 8, 9]);
positiveOrNegativeNums([3, -2, 0, -1]);