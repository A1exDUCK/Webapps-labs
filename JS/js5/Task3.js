const currentStock = [
    'Coca-Cola', '20',
    'Pepsi', '15',
    'Fanta', '10',
    'Sprite', '25'
];

const delivery = [
    'Coca-Cola', '10',
    'Fanta', '5',
    'Mountain Dew', '15',
    'Sprite', '5'
];

const storeInventory = {};

for (let i = 0; i < currentStock.length; i += 2) {
    const product = currentStock[i];
    const quantity = Number(currentStock[i + 1]);
    storeInventory[product] = quantity;
}

for (let i = 0; i < delivery.length; i += 2) {
    const product = delivery[i];
    const quantity = Number(delivery[i + 1]);

    if (storeInventory.hasOwnProperty(product)) {
        storeInventory[product] += quantity;
    } else {
        storeInventory[product] = quantity;
    }
}

for (const [product, quantity] of Object.entries(storeInventory)) {
    console.log(`${product} -> ${quantity}`);
}
