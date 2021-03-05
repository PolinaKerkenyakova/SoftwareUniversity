function storeProvision(stock, ordered) {

    const products = {};

    for (let i = 0; i < stock.length; i += 2) {
        let item = stock[i];
        let quantity = Number(stock[i + 1]);

        products[item] = quantity;
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let item = ordered[i];
        let quantity = Number(ordered[i + 1]);

        if (products[item] === undefined) {
            products[item] = 0;
        }
        products[item] += quantity;
    }

    for (let product in products) {
        console.log(`${product} -> ${products[product]}`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);