var cat = require("cat-me");
var joke = require("knock-knock-jokes");
var faker = require("faker");

// console.log("from app.js");
// console.log(cat());
// console.log(joke());

console.log("=======================");
console.log("WELCOME TO MY SHOP");
console.log("=======================");

for (var i = 0; i <= 10; i++) {
    // console.log(randomProduct + " - $" + randomPrice);
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}