function reverseArrayOfNumbers(elementsCount, numberArray) {

    let newNumberArray = [];

    for (let i = 0; i < elementsCount; i++) {
        newNumberArray[i] = numberArray[i];
    }

    let reversedArray = [];
    
    for (let i = newNumberArray.length - 1; i >= 0; i--) {
        reversedArray += newNumberArray[i] + ' ';
    }

    console.log(reversedArray);
}

reverseArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseArrayOfNumbers(2, [66, 43, 75, 89, 47]);