function fruit(typeOfFruit, weigth, pricePerKg) {

    let kg = weigth / 1000;

    console.log(`I need $${(kg * pricePerKg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${typeOfFruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);