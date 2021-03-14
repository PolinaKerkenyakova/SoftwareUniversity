function matchFullName(input) {

    let pattern = /\b[A-Z][a-z]{1,} [A-Z][a-z]{1,}\b/g;

    let names = input[0].split(', ');
    let validNames = [];

    while ((validName = pattern.exec(names)) !== null) {
        validNames.push(validName[0]);
    }

    console.log(validNames.join(' '));
}

matchFullName(['Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov']);