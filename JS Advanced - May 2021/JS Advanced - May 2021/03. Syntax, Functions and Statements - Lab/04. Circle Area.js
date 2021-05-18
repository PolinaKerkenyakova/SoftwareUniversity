function circleArea(input) {

    let type = typeof input
    if (type === 'number') {
        let radius = input;
        let circleArea = Math.PI * (Math.pow(radius, 2));
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

circleArea(5);
circleArea('name');