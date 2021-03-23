function movingTarget(inputArr) {

    let targets = inputArr.shift().split(' ').map(Number);
    for (let i = 0; i < inputArr.length; i++) {

        let [command, index, num] = inputArr[i].split(' ');

        if (command === 'End') {
            break;
        }

        index = Number(index);
        num = Number(num);

        if (command === 'Shoot') {
            if (index >= 0 && index < targets.length) {
                targets[index] -= num;

                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }

        } else if (command === 'Add') {
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 1, num);
            } else {
                console.log('Invalid placement!');
            }

        } else if (command === 'Strike') {

            let start = index - num >= 0;
            let end = index + num < targets.length;
            if (start && end) {
                targets.splice(index - num, 1 + num * 2);
            } else {
                console.log(`Strike missed!`);
            }
        }
    }

    console.log(targets.join('|'));
}

// movingTarget
//     ([
//         '52 74 23 44 96 110',
//         'Shoot 5 10',
//         'Shoot 1 80',
//         'Strike 2 1',
//         'Add 22 3',
//         'End'
//     ]);

movingTarget(['1 2 3 4 5', 'Strike 0 1', 'End']);
