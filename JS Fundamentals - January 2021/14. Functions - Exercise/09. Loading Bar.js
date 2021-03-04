function loadingBar(number) {

    let numberProcents = number / 10;

    let output = '['
    for(let i = 1; i <= 10; i++) {
        if (i <= numberProcents) {
            output += '%';
        } else {
            output += '.';
        }

        if (i === 10) {
            output += ']'
        }
    }

    if (numberProcents === 10) {
        console.log('100% Complete!');
        console.log(output);
    } else {
        console.log(`${numberProcents * 10}% ${output}`);
        console.log('Still loading...')
    }
}


// loadingBar(30);
// loadingBar(50);
loadingBar(100);