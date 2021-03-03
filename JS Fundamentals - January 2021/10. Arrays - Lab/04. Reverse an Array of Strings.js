function reverseArrayOfStrings(stringsArray) {

    let reversedArray = [];

    for (let i = stringsArray.length - 1; i >= 0; i--) {
        reversedArray += stringsArray[i] + ' ';
    }

    console.log(reversedArray);
}

reverseArrayOfStrings(['a', 'b', 'c', 'd', 'e']);
reverseArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArrayOfStrings(['33', '123', '0', 'dd']);