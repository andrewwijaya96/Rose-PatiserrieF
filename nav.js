

function goToHome(){
  window.location = "index.html";
}
function goToCart(){
  window.location = "cart.html";
}
function goToCheckout(){
  var jumlah = document.getElementById("cart-count").innerHTML;
  if(jumlah == 0){
    document.getElementById("show-cart").innerHTML = "Your Cart Is Empty, add sweetness to your cart by buying before you checkout";
  }else{
    window.location = "checkout.html";
  }
}

function goToAboutUs(){
  window.location = "about.html";
}
function goToCake(){
  window.location = "cake.html";
}
function goToChoux(){
  window.location = "choux.html";
}
function goToAbcInfo(){
  window.location = "abc.html";
}
function goToSwcInfo(){
  window.location = "swc.html";
}
