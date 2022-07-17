const prompt = require('prompt-sync')();
const fs = require('fs');

function Product(num,pname,quantity,price){
    this.num = num;
    this.pname = pname;
    this.quantity = quantity;
    this.price = price;
}

exports.addProduct = () =>{
    const productNumber = Number(prompt(`How many Products you want to add:`));
    let cart = [];
    for(let i = 0;i < productNumber;i++){
        const num = prompt(`Enter product Number:`);
        const pname = prompt(`Enter product Name:`);
        const quantity = Number(prompt(`Enter product Quantity:`));
        const price = Number(prompt(`Enter product Price:`));
        
        const product = new Product(num,pname,quantity,price);
        cart = [...cart,product]
    }
    fs.writeFileSync("cart.json",JSON.stringify(cart),(err) =>{
        if(err)
            console.log(`Something went wrong :(`);
        else
            console.log(`Product added to the cart`);
    })
}
