class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
    }

    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
    };

    getProducts() {
        const result = [];
        this.storage.forEach(product => {
            console.log(JSON.stringify(product));
            result.push(JSON.stringify(product));
        })
        return result.join('\n');
    };

    get totalCost() {
        let totalCost = 0;
        this.storage.forEach(product => {
            totalCost += product.quantity * product.price;
        });

        return totalCost;
    };
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);