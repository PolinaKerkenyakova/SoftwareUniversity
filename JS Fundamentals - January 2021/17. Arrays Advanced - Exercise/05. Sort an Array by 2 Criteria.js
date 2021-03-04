function sortByTwoCriteria(input) {


    let sorted = input.sort((a,b) => {

        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        } else {
            return a.localeCompare(b);
        }
    });

    console.log(sorted.join('\n'))
}

sortByTwoCriteria(["alpha", "beta", "gamma"]);
sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);