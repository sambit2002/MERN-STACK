const {addProduct} = require("./addProduct");
const {updateQuantity} = require("./updateQuantity");
const {removeProduct} = require("./removeProduct");
const {showProducts} = require("./showProducts");
const prompt = require(`prompt-sync`)();

const opertaion = prompt(`Which operation you want to perform?`);

switch (opertaion) {
    case 'show':
        showProducts();
        break;
    case 'add': 
        addProduct();
        break;
    case 'update':
        showProducts();
        const num = prompt('Enter the product number you want to update:');
        updateQuantity(num);   
        break;
    case 'remove':
        showProducts();    
        const n = prompt('Enter the product number you want to remove:');
        removeProduct(n);
        break;
    default:
        console.log("Unknown operation");
        break;
}