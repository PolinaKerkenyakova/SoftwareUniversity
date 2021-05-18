function stringLength(firstParameter, secondParameter, thirdParameter) {

    let totalLength = firstParameter.length + secondParameter.length + thirdParameter.length;

    console.log(totalLength);
    console.log(Math.floor(totalLength / 3));
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');