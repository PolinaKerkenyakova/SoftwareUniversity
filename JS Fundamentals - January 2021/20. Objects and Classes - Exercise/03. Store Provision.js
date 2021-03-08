function storeProvision(stock, ordered) {

    let products = {};

    for (let i = 0; i < stock.length; i+=2) {
        let product = stock[i];
        let quantity = Number(stock[i + 1]);

        products[product] = quantity;
    }

    for (let i = 0; i < ordered.length; i+=2) {
        let product = ordered[i];
        let quantity = Number(ordered[i + 1]);

        let allProducts = Object.keys(products);

        if (allProducts.includes(product)) {
            products[product] += quantity;
        } else {
            products[product] = quantity;
        }
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