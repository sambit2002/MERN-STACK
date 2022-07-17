const prompt = require('prompt-sync')();
const fs = require('fs');

function Product(num,pname,quantity,price){
    this.num = num;
    this.pname = pname;
    this.quantity = quantity;
    this.price = price;
}

exports.updateQuantity = (num)=>{
    let cart = JSON.parse(fs.readFileSync("cart.json"));
    const quantity = Number(prompt(`Enter updated quantity: `));
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].num == num) {
            cart[i].quantity = quantity;
            var pname = cart[i].pname;
            var price = cart[i].price;
            break;
        }
    }
    
    const productObj = new Product(num,pname,quantity,price);
    cart = cart.filter(cart=>cart.num != num)
        console.log(`Adding updated user to existing user array`)
        cart = [...cart,productObj]

        fs.writeFile("cart.json",JSON.stringify(cart),(err) =>{
            if(err)
                console.log(`Something went wrong :(`);
            else
                console.log(`Quantity of product with Product number ${num} updated successfully`);
        })

}