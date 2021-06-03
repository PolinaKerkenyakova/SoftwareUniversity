function solve() {

    let inputNumber = document.querySelector('#input');
    let selectMenuTo = document.querySelector('#selectMenuTo');
    let resultField = document.querySelector('#result');
    let optionSelected = document.querySelectorAll('#selectMenuTo option');


    // Adding value and text to already created option
    let binaryOption = selectMenuTo[0];
    let nd = document.createTextNode('Binary');
    binaryOption.appendChild(nd);
    binaryOption.value = 'binary';
    // selectMenuTo.appendChild(binaryOption);

    // Creating option, setting value and text
    let hexadecimalOption = document.createElement("option");
    let node = document.createTextNode('Hexadecimal');
    hexadecimalOption.appendChild(node);
    hexadecimalOption.value = 'hexadecimal'
    selectMenuTo.appendChild(hexadecimalOption);


    let button = document.querySelector('button');
    button.addEventListener('click', onClick)

    function onClick() {

        inputNumber = Number(inputNumber.value);
        let result;

        if (selectMenuTo.value === 'binary') {
            result = dec2bin(inputNumber);
        } else if (selectMenuTo.value === 'hexadecimal') {
            result = decimalToHexString(inputNumber);
        }

        console.log(selectMenuTo.value);

        resultField.value = result;


        function dec2bin(dec) {
            return (dec >>> 0).toString(2);
        }

        function decimalToHexString(number) {
            if (number < 0) {
                number = 0xFFFFFFFF + number + 1;
            }

            return number.toString(16).toUpperCase();
        }
    }
}