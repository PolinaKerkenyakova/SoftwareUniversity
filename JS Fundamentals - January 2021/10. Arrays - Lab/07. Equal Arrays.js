function equalArrays(firstArray, secondArray) {

    let sum = 0;
    let areNotEqual = false;
    let index = 0;

    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] === secondArray[i]) {
            sum += Number(firstArray[i]);
        } else {
            areNotEqual = true;
            index = i;
            break;
        }
    }

    if (areNotEqual) {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);