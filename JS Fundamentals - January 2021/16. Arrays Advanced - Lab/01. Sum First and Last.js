function sumFirstAndLast(arr) {

    let numArray = arr.map(Number);

    let firstNum = numArray[0];
    let lastNum = numArray[numArray.length - 1];

    console.log(firstNum + lastNum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);