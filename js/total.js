//get data from local storage, can't use fetch() because is used to retrieve data from an external resource (like a JSON file or an API)
function getItems(){
    //get data from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
//get the container where data will be stored
const cartContainer = document.getElementById("cart-items-container");
const cartMessage= document.getElementById("cart-message");
const itemsInCart= document.getElementById("items-in-cart-message");
    if (cart.length ===0){
        cartMessage.textContent= "Your cart is empty"
        cartContainer.innerHTML = ''; 
    }
    else{
        cartContainer.innerHTML = '';
   cart.forEach(
    item=>{
        const itemDiv= document.createElement("div");
        itemDiv.classList.add("cart-item")
        itemDiv.innerHTML = `
        <h5>${item.title}</h5>
        <p>${item.price} gold</p>
        <img src="${item.img}" alt="${item.title}" class="cart-item-img" />
    `;

    // Append the item div to the container
    cartContainer.appendChild(itemDiv);

    itemsInCart.textContent = `You have ${cart.length} item(s) in your cart.`;
    }
   )
   .catch(error => {
    console.error(error);
});
       
    }
}
// Call the function to display cart items
window.addEventListener("DOMContentLoaded", getItems);

