function calorieObject(inputArr) {

    let foods = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        let product = inputArr[i];
        let calories = Number(inputArr[i + 1]);

        foods[product] = calories;
    }

    console.log(foods);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']
);