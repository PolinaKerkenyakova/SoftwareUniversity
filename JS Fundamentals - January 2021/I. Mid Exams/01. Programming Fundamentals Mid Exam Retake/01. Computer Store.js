function computerStore(inputArr) {

    let customerType = inputArr.pop();
    inputArr = inputArr.map(Number);

    let priceWithoutTax = 0;

    for (let partPrice of inputArr) {
        if (partPrice < 0) {
            console.log('Invalid price!');
        } else {
            priceWithoutTax += partPrice;
        }
    }

    let taxes = priceWithoutTax * 0.2;

    let totalPrice = priceWithoutTax + taxes;

    if (customerType === 'special') {
        totalPrice *= 0.9;
    }

    if (totalPrice <= 0) {
        console.log('Invalid order!')
    } else {
        console.log(`Congratulations you've just bought a new computer!`)
        console.log(` Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log(` -----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}

computerStore
    ([
        '1050',
        '200',
        '450',
        '2',
        '18.50',
        '16.86',
        'special'
    ]);

computerStore
    ([
        '1023',
        '15',
        '-20',
        '-5.50',
        '450',
        '20',
        '17.66',
        '19.30',
        'regular'
    ]);

computerStore
    ([
        'regular'
    ]);