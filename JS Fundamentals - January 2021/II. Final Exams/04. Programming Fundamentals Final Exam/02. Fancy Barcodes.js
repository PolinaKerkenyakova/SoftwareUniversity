function fancyBarcodes(inputArr) {

    let regex = /@[#]+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@[#]+/g;
    let digitRegex = /[0-9]/g;
    let barcodesCount = inputArr.shift();

    for (let line of inputArr) {

        if (regex.test(line)) {
            let validMatch = line.match(regex);
            let digitsMatch = digitRegex.test(validMatch[0]);

            if (digitsMatch) {
                let digits = validMatch[0].match(digitRegex);
                console.log(`Product group: ${digits.join('')}`);
            } else {
                console.log(`Product group: 00`);
            }

        } else {
            console.log('Invalid barcode')
        }
    }
}

fancyBarcodes([
    '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##'
]);

fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);