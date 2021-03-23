function shootForTheWin(inputArr) {

    let targets = inputArr.shift().split(' ').map(Number);

    let shotTargets = 0;
    let index = inputArr.shift();

    while (index !== 'End') {
        index = Number(index);

        

        let numModifier = 0;
        if (targets[index] !== -1) {
            numModifier = targets[index]
            targets[index] = -1;
            shotTargets++;
        }

        for (let i = 0; i < targets.length; i++) {
            if (targets[i] !== -1) {
                if (targets[i] <= numModifier) {
                    targets[i] += numModifier;
                } else {
                    targets[i] -= numModifier;
                }
            }
        }


        index = inputArr.shift();

        if (Number(index) >= targets.length && index !== 'End') {
            index = inputArr.shift();
        }
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
}

shootForTheWin(['24 50 36 70', '0', '4', '3', '1', 'End']);
shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);