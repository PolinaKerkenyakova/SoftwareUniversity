function listProcessor(collection) {
    let result = [];

    let commands = {
        add: str => result.push(str),
        remove: str => result = result.filter(x => x !== str),
        print: () => console.log(result.join(','))
    }

    collection.forEach(line => {
        let [command, word] = line.split(' ');
        commands[command](word);
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);