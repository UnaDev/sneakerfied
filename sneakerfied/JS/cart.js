//cart as empty array
let cart = []
//constructor to save my product info
function product(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price
}

//declaring all variables here
let shoe1 = new product("../images/adisport.jpg", "adidas sport", 586.00)
let shoe2 = new product("../images/floor conv.jpg", "chuck taylor", 227.00)
let shoe3 = new product("../images/color nike.jpg", "nike airmax", 462.00)
let shoe4 = new product("../images/nike color.jpg", "nike airforce", 632.00)
let shoe5 = new product("../images/converse.jpg", "converse hi top", 250.00)

cartTotal = document.getElementsByClassName("cart-total")
//array of products
const products = [shoe1, shoe2, shoe3, shoe4, shoe5]


//using forEach to loop through each of the cart products
//removing them from the html & storage 

 function loadCart() {
     const cartInfo = localStorage.getItem("cart");
     cart = JSON.parse(cartInfo)
            cart.forEach((i) => {
                let cartData = document.createElement ("tr");
                cartData.innerHTML = `
                <td> 
                                <td> <img class="uk-preserve-width" width="100" src="../images/${products[i].image}"> </td>
                                <td class="uk-table-link"> <h4 class = "item-name">${products[i].name}</h4> </td>
                                <td class="uk-text-truncate"><h4 class = "total-price">$${products[i].price}</h4></td>
                                <td><button class="uk-button uk-button-secondary remove" type="button">remove</button>
                                </td>
                `
                const cartItems = document.getElementById("firstCart");

            cartData.getElementsByClassName("remove")[0].addEventListener("click", function(e){
                remove(i, e)
             
            });
            cartItems.append(cartData)
            
            });
            totalPrice()  
    }
 loadCart()

 //calculate prices
function totalPrice() {
    let total = 0
    cart.forEach((i) => {
       total += products[i].price
        });
        document.getElementById("cart-total").innerText = "$" + total
}

//remove from cart
function remove(i, e) {
    for(j = 0; j < cart.length; j++) {
        if(cart[j] === i) {
            cart.splice(j, 1)
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    e.target.parentElement.parentElement.remove();
    totalPrice();
    alert(`${products[i].name} removed from cart`)
    
}
