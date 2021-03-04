function matrix(number) {

    for (let col = 0; col < number; col++) {
        let output = '';

        for (let row = 0; row < number; row++) {
            output += number + ' ';
        }

        console.log(output)
    }
}

matrix(3);
matrix(7);
matrix(2);