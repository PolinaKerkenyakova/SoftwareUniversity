function evenPositionElements(inputArray) {

    let elements = [];

    for (let i = 0; i < inputArray.length; i += 2) {
        let element = inputArray[i];
        elements.push(element);
    }

    console.log(elements.join(' '));
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);