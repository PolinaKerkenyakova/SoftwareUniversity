function pieceOfPie(inputArray, start, end) {

    let result;
    if (inputArray.indexOf(start)) {
        let from = inputArray.indexOf(start);
        let to = inputArray.indexOf(end)
        result = inputArray.slice(from, to + 1);
    }

    console.log(result);
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie');