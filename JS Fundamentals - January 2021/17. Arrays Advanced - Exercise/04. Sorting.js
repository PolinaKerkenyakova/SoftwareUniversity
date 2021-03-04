function sorting(numArray) {

    numArray.sort((a, b) => b - a);

    let modifiedArray = [];

    let lengthArr = numArray.length;

    for (let i = 0; i < lengthArr; i++) {

        if (i % 2 === 0) {
            modifiedArray += numArray.shift() + ' ';
        } else {
            modifiedArray += numArray.pop() + ' ';
        }
    }

    console.log(modifiedArray);
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);