function storage(input) {

    let storage = new Map();

    for (let item of input) {
        let [product, quantity] = item.split(' ');
        quantity = Number(quantity);
        

        if (!(storage.has(product))) {
            storage.set(product, quantity);
        } else {
            let currentQantity = storage.get(product);
            let newQantity = currentQantity += quantity;
            storage.set(product, newQantity);
        }
    }

    for (let kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);