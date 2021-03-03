function prindAndSum(start, end) {
    let output = '';
    let sum = 0;

    for (let i = start; i <= end; i++) {
        output += i + ' ';
        sum += i;
    }

    console.log(output);
    console.log(`Sum: ${sum}`);
}

prindAndSum(5, 10);
prindAndSum(0, 26);
prindAndSum(50, 60);