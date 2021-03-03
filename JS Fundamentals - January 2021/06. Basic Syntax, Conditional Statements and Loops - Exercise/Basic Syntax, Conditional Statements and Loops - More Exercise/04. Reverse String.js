function reverseString(stringInput) {

    let output = '';

    for (let i = stringInput.length - 1; i >=0; i--) {
        output += stringInput[i];
    }
    console.log(output);
}

reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');