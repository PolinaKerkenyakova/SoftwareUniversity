function ladyBug(inputArr) {

    let fieldSize = inputArr.shift();
    let bugsIndexes = inputArr.shift().split(' ').map(Number);

    let field = fieldSize;

    if (fieldSize === 0) {
        return;
    }

    for ( let bugIndex in bugsIndexes) {
        bugIndex = Number(bugIndex);
        if (!(bugIndex < 0 || bugIndex >= field.length)) {
            field[bugsIndex] = 1
        }
    }

    while (true) {
        let commands = inputArr.shift();
        let [bugIndex, direction, flyLength] = commands.split(' ');
        bugIndex = Number(bugIndex);
        flyLength = Number(flyLength);

        if (bugIndex < 0 || bugIndex >= fieldSize) {
            continue;
        }

        if (field[bugIndex] === 0) {
            continue;
        }

        field[bugIndex] = 0;
        let position = bugIndex;

        while (true) {
            if (direction == "right") {
                position += flyLength;
            } else {
                position -= flyLength;
            }

            if (position < 0 || position >= fieldSize) {
                break;
            }

            if (field[position] == 1) {
                continue;
            } else {
                field[position] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}

ladyBug([3, '0 1', '0 right 1', '2 right 1']);
ladyBug([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladyBug([5, '3', '3 left 2', '1 left -2']);