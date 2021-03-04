function distinctArray(numberArr) {

    let modifiedArray = [];

    for (let element of numberArr) {
        if (!(modifiedArray.includes(element))) {
            modifiedArray.push(element)
        }
    }

    console.log(modifiedArray.join(' '));
}

distinctArray([1, 2, 3, 4]); //Expected output: 1 2 3 4
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]); //Expected output: 7 8 9 2 3 4 1
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]); //Expected output: 20 8 12 13 4 5
