$(".add-to-cart").click(function(event){
     event.preventDefault();
     var name = $(this).attr("data-name");
     var price = Number($(this).attr("data-price"));
     addItemToCart(name, price, 1);
     displayCart();
   });

   function displayCart(){
     var cartArray = listCart();
     var output ="";
     for (var i in cartArray){
       output +=
     "<tr>"
     +"<td class='itemName'>"
     +cartArray[i].name
     +"</td>"
     +"<td class='itemPrice'>"
     +"Rp "
     +cartArray[i].price
     +"</td>"
     +"<td>"
     +"</td>"
     +"<td class='itemCount'>"
     +cartArray[i].count
     +"</td>"
     +"<td style='width:20px;'>"
     +"</td>"
     +"<td>"
     +"<span class='sub-item' data-name='"+cartArray[i].name+"'>-</span>"
     +"</td>"
     +"<td style='width:12px;'>"
     +"</td>"
     +"<td>"
     +"<span class='delete-item' data-name='"+cartArray[i].name+"'>&times;</span>"
     +"</td>"
     +"</tr>"
     }
     $("#show-cart").html(output);
     //$("#total-cart").html( totalCart() );
 //$("#cart-count").html( countCart() );
 saveCart();
   }

$("#show-cart").on("click", ".delete-item", function(event) {
 var name = $(this).attr("data-name");
 removeItemFromCartAll(name);
 displayCart();
 saveCart();
});

$("#show-cart").on("click", ".sub-item", function(event) {
 var name = $(this).attr("data-name");
 removeItemFromCart(name);
 displayCart();
 saveCart();
});

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
