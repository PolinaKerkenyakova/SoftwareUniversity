function encodeAndDecodeMessages() {

    // Encode message and sent it functionality
    let encodeArea = Array.from(document.querySelectorAll('textarea'))[0];
    let encodeBtn = Array.from(document.querySelectorAll('button'))[0];

    encodeBtn.addEventListener('click', onEncoding);


    // Decode messge and read it functionality
    let decodeArea = Array.from(document.querySelectorAll('textarea'))[1]
    let decodeBtn = Array.from(document.querySelectorAll('button'))[1];

    decodeBtn.addEventListener('click', onDecoding);

    function onEncoding(e) {
        let text = encodeArea.value.split('');
        let asciiPlusOne = [];
        text.map(char => {
            let code = char.charCodeAt(0);
            asciiPlusOne.push(code + 1)
        });

        let modifiedText = asciiPlusOne.map(x => String.fromCharCode(x));

        encodeArea.value = '';
        decodeArea.value = modifiedText.join('');

    }

    function onDecoding(e) {
        let text = decodeArea.value.split('');
        let asciiMinusOne = [];

        text.map(char => {
            let code = char.charCodeAt(0);
            asciiMinusOne.push(code - 1);
        });

        let modifiedText = asciiMinusOne.map(x => String.fromCharCode(x));
        decodeArea.value = modifiedText.join('');
    }
}