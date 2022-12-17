var express = require('express');
var router = express.Router();
let productList = [
  { id: 1, brand: "Acer", name: "Acer M5", price: 1300, desc: { cpu: "Intel i7 11th generation", ram: { value: 32, unit: "GB" }, storage: { value: 512, unit: "GB" } } },
  { id: 2, brand: "Lenovo", name: "Legion 7 pro", price: 1699, desc: { cpu: "Ryzen 9 6900HX processor", ram: { value: 16, unit: "GB" }, storage: { value: 2, unit: "TB" } } },
  { id: 3, brand: "Apple", name: "Macbook Pro 14 inch", price: 1999, desc: { cpu: "Apple Silicon M1 Pro", ram: { value: 16, unit: "GB" }, storage: { value: 512, unit: "GB" } } },
  { id: 4, brand: "Dell", name: "Dell G15", price: 799, desc: { cpu: "12th Gen Intel® Core™ i5-12500H", ram: { value: 8, unit: "GB" }, storage: { value: 256, unit: "GB" } } },
  { id: 5, brand: "MSI", name: "Titan GT77 12UHS-063", price: 2499, desc: { cpu: "Core i9-12900HX 8+8Core", ram: { value: 32, unit: "GB" }, storage: { value: 1, unit: "TB" } } },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/products', (req, res) => {
  res.render('product.ejs', { productList: productList });
});

let cart = [];

router.post("/addCart", (req, res) => {
  let id = parseInt(req.body.id);
  let product = productList.find(x => x.id == id);
  if (product) {
    if(cart.length>0){
      let cartItem = cart.find(x=>x.id === product.id);
      if(cartItem){
        ++cartItem.quantity;
        cart = cart.filter(x=>x.id !==product.id);
        cart.push(cartItem);
      } else {
        cart.push({id: product.id, productName: product.name, price: product.price, quantity: 1});
      }
    } else {
      cart.push({id: product.id, productName: product.name, price: product.price, quantity: 1});
    }
    console.log(cart);
  }
  res.redirect("/shoppingcart");
});

router.get("/shoppingcart", (req, res)=>{
  res.render('shoppingcart.ejs', { cart: cart });
})

module.exports = router;
