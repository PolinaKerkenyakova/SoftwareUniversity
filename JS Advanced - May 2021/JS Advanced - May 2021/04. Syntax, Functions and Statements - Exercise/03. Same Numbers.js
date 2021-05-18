function sameNumbers(num) {

    let numString = num.toString().split('');
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        let currentElement = numString[i];

        for (let j = i + 1; j < numString.length; j++) {
            let nextElement = numString[j];

            if (currentElement !== nextElement) {
                isSame = false;
            }
        }

        sum += Number(numString[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);