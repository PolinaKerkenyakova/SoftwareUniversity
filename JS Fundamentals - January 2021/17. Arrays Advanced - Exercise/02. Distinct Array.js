function distinctArray(numberArr) {

    // for (let i = 0; i < numberArr.length; i++) {
    //     let element = numberArr[i];

    //     for (let j = i + 1; j < numberArr.length; j++) {
    //         let current = numberArr[j];

    //         if (element === current) {
    //             numberArr.splice(j, 1)
    //         }
    //     }
    // }

    // console.log(numberArr.join(' '))


    let modifiedArr = [];

    for (let element of numberArr) {
       if (!modifiedArr.includes(element)) {
            modifiedArr.push(element);
       }    
    }

    console.log(modifiedArr.join(' '))
}

distinctArray([1, 2, 3, 4]); //Expected output: 1 2 3 4
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]); //Expected output: 7 8 9 2 3 4 1
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]); //Expected output: 20 8 12 13 4 5