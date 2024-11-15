var itemsArray = [
    { name: "Juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 },
];
var total = 0;
itemsArray.forEach(function (item) {
    var itemTotal = item.price * item.quantity;
    console.log("Total price for ".concat(item.name, ":\n        ").concat(itemTotal));
    total += itemTotal;
});
console.log("Total cost of all items: ".concat(total));
