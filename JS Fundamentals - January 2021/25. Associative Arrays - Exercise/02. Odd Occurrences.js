function oddOccurrences(input) {

    let elements = input.split(' ').map((x) => x.toLowerCase());

    let words = {};

    for (let word of elements) {
        if (words[word]) {
            words[word] = words[word] += 1;
        } else {
            words[word] = 1
        }
    }

    let output = [];
    for (let kvp of Object.entries(words)) {
        if (kvp[1] % 2 !== 0) {
            output.push(kvp[0]);
        } 
    }

    console.log(output.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');