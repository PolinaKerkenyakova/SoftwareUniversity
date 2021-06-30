function argumentInfo(...input) {

    let inputTypes = {};
    input.forEach(x => {
        if (!inputTypes[typeof x]) {
            inputTypes[typeof x] = 0;
        }
        inputTypes[typeof x] += 1;

        console.log(`${typeof x}: ${x}`);
    });

    Object.entries(inputTypes)
        .sort((a, b) => b[1] - a[1])
        .forEach(x => {
            console.log(`${x[0]} = ${x[1]}`);
        })
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });
argumentInfo({ name: 'bob' }, 3.333, 9.999)