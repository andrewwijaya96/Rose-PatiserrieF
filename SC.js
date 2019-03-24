var cart = [];

var Item = function(name, price, count){
    this.name = name;
    this.price = price;
    this.count = count;
}

// adding item to cart
function addItemToCart(name, price, count) {
    for (var i in cart) {
      if (cart[i].name === name ) {
        cart[i].count += count;
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}

// Removes 1 Item From Cart
function removeItemFromCart(name){
  for (var i in cart) {
    if (cart[i].name === name){
      cart[i].count --;
        if (cart[i].count === 0){
          cart.splice(i, 1)
        }
      break;
    }
  }
  saveCart();
}

// Clear 1 Object From Cart
function removeItemFromCartAll(name){
  for (var i in cart) {
    if (cart[i].name === name){
      cart.splice(i,1);
      break;
    }
  }
  saveCart();
}

// Clear The Cart
function clearCart(){
  cart = [];
  document.getElementById("show-cart").innerHTML = "";
  saveCart();
  document.getElementById("total-cart").innerHTML = "0";
}

// Shows Total Count Of Item
function countCart(){
  var totalCount = 0;
  for (var i in cart){
      totalCount += cart[i].count;
  }
  return totalCount;
}

// Shows Total Price
function totalCart(){
  var totalCost = 0;
  for (var i in cart){
    totalCost += cart[i].price * cart[i].count
  }
  return totalCost;
  saveCart();
}
// Returns an array
function listCart(){
  var cartCopy = [];
  for (var i in cart){
    var item = cart[i];
    var itemCopy = {};
    for (var p in item){
       itemCopy[p] = item[p];
    }
    cartCopy.push(itemCopy);
  }
  return cartCopy;
}

function saveCart(){
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart(){
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

loadCart();
displayCart();
