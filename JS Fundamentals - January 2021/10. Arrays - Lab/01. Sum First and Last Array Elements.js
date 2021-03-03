function sumFirstAndLast(numberArray) {

    let sum = Number(numberArray[0]) + Number(numberArray[numberArray.length - 1]);

    console.log(sum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['10', '17', '22', '33']);
sumFirstAndLast(['11', '58', '69']);