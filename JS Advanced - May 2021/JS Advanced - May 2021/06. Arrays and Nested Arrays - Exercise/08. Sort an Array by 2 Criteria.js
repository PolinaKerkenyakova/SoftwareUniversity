function sortByTwoCriteria(inputArr) {

    let sortedArr = inputArr.sort((a, b) => {

        if (a.length === b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    });

    console.log(sortedArr.join('\n'));
}

sortByTwoCriteria([
    'alpha',
    'beta',
    'gamma'
]);

sortByTwoCriteria([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);

sortByTwoCriteria([
    'test',
    'Deny',
    'omen',
    'Default'
]);