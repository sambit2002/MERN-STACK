const prompt = require('prompt-sync')();
const fs = require('fs');

exports.showProducts = ()=>{
    let cart = JSON.parse(fs.readFileSync("cart.json"));
    console.log(`Products present in your cart:`)
    console.log(`NUMBER\tNAME\tQUANTITY`)
    console.log(`------------------------`)

    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        console.log(`${cart[i].num}\t${cart[i].pname}\t${cart[i].quantity}\n`)
            for(var j = 0; j< cart[i].quantity ;j++){
                sum += cart[i].price;
            }
        }
    console.log(`Total Price of Products in cart is ${sum}`);
}