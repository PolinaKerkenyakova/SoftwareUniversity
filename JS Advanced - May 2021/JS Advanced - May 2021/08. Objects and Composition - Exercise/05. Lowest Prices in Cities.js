function lowestPricesInCities(inputArr) {
    let cities = {};
    inputArr.forEach(x => {
        let [city, productName, productPrice] = x.split(' | ');

    });
}

console.log(lowestPricesInCities(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
));

