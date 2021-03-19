function arrayManipulation(numbers, arrInput) {


    for (let i = 0; i < arrInput.length; i++) {
        let [command, index, ...element] = arrInput[i].split(' ');

        index = Number(index);
        element = element.map(Number);
        if (command === 'add') {
            numbers.splice(index, 0, element[0]);
        } else if (command === 'addMany') {
            numbers.splice(index, 0, ...element)
        } else if (command === 'contains') {
            let indexOfElement = numbers.indexOf(index);
            console.log(indexOfElement);
        } else if (command === 'remove') {
            numbers.splice(index, 1);
        } else if (command === 'shift') {
            for (let i = 0; i < index; i++) {
                let num = numbers.shift();
                numbers.push(num);
            }
        } else if (command === 'sumPairs') {
            let nums = [];
            for (let i = 0; i < numbers.length; i += 2) {
                nums.push(numbers[i] + numbers[i + 1]);
            }

            numbers = nums

         
        } else if (command === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
            break;
        }
    }
}

arrayManipulation([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);
// arrayManipulation([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);