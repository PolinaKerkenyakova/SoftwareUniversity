function maxSequence(numArray) {

    let bestSequence = [];

    for (let i = 0; i < numArray.length; i++) {
        let element = numArray[i];
        let currentSequence = [element];

        for (let j = i + 1; j <numArray.length; j++) {
            let nextElement = numArray[j];

            if (element === nextElement) {
                currentSequence.push(nextElement);
                i = j;
            } else {
                break;
            }
        }

        if (currentSequence.length > bestSequence.length) {
            bestSequence = currentSequence;
        }
    }

    console.log(bestSequence.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequence([4, 4, 4, 4]);
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);