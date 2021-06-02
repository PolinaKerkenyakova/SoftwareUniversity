function extract(content) {

    let output = [];
    content = document.querySelector('#content').textContent;
    let regex = /\((?<town>[A-Za-z ]+)\)/g;

    result = regex.exec(content)
    while (result) {
        let town = result[1];
        output.push(town);

        result = regex.exec(content)
    }

    return output.join('; ');
}