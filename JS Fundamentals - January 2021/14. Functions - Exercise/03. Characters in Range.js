function charsInRange(firstChar, secondChar) {

    let firstCharCode = firstChar.charCodeAt();
    let secondCharCode = secondChar.charCodeAt();

    let start = 0;
    let end = 0;
    if (firstCharCode < secondCharCode) {
        start = firstCharCode;
        end = secondCharCode;
    } else {
        start = secondCharCode;
        end = firstCharCode;
    }

    function printChars(a, b) {
        let output = [];
        for (let i = a + 1; i < b; i++) {
            let char = String.fromCharCode(i);
            output.push(char);
        }

        return output.join(' ');
    }

    let print = printChars(start, end);

    console.log(print);
}

charsInRange('a', 'd');
charsInRange('#', ':');
charsInRange('C', '#');