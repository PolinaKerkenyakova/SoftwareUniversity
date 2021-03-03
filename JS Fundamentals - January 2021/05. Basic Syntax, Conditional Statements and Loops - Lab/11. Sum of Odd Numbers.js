function sumOddNumbers(number) {

    let sum = 0;
    let counter = 0;

    for (let i = 1; i <= 100; i+=2) {
       counter++;

       if (counter > number) {
           break;
       } else {
           console.log(i);
           sum += i;
       }
    }

    console.log(`Sum: ${sum}`);
}

sumOddNumbers(5);
sumOddNumbers(3);