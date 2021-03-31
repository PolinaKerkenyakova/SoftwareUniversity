function adAstra(inputArr) {

    let totalCalories = 0;
    let input = inputArr[0];
    let foods = [];

    let regex = /([|#])(?<item>[A-Za-z ]+)\1(?<expDate>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]{1,5})\1/g;

    while ((validFood = regex.exec(input)) !== null) {
        let item = validFood.groups['item'];
        let expDate = validFood.groups['expDate'];
        let calories = validFood.groups['calories'];

        let food = {
            name: item,
            date: expDate,
            calories: Number(calories),
        };

        foods.push(food);
        totalCalories += Number(calories);
    }

    let daysWithFood = Math.floor(totalCalories / 2000);

    if (daysWithFood > 0) {
        console.log(`You have food to last you for: ${daysWithFood} days!`);
        foods.forEach(item => {
            console.log(`Item: ${item.name}, Best before: ${item.date}, Nutrition: ${item.calories}`);
        })
    } else {
        console.log(`You have food to last you for: 0 days!`)
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

adAstra([
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);