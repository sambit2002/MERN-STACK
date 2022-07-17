const prompt = require('prompt-sync')();
const fs = require('fs');

exports.removeProduct = (n)=>{
    let cart = JSON.parse(fs.readFileSync("cart.json"));
    cart = cart.filter(cart=>cart.num != n)
    fs.writeFile("cart.json",JSON.stringify(cart),(err) =>{
        if(err)
            console.log(`Something went wrong :(`);
        else
            console.log(`Product with Product number ${n} has been removed from cart`);
    })

}