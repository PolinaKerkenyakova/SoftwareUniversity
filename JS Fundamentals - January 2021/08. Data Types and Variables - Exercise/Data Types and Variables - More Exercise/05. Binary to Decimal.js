function binaryToDecimal(binary) {

    let binaryString = binary.toString();
    let decimal = parseInt(binaryString, 2);

    console.log(decimal);
}

binaryToDecimal(00001001);
binaryToDecimal(11110000);