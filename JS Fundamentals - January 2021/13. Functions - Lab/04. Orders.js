function orders(product, quantity) {

    let totalPrice = 0;
    let price = 0;

    switch (product) {
        case 'coffee':
            price = 1.5;
            break;
        case 'water':
            price = 1;
            break;
        case 'coke':
            price = 1.4;
            break;
        case 'snacks':
            price = 2;
            break;
    }

    totalPrice = price * quantity;

    return totalPrice.toFixed(2);
}

console.log(orders('water', 5));
console.log(orders('coffee', 2));
