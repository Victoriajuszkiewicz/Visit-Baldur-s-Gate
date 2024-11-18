//get data from local storage, can't use fetch() because is used to retrieve data from an external resource (like a JSON file or an API)
function getItems(){
    //get data from local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
//get the container where data will be stored
const cartContainer = document.getElementById("cart-items-container");
const cartMessage= document.getElementById("cart-message");
const itemsInCart= document.getElementById("items-in-cart-message");
    
if (cart.length ===0){
        cartMessage.textContent= "Your cart is empty!"

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
        <i class="bi bi-trash3" onClick="deleteItem(${item.id})"></i>
        <p class="product-price-total">${item.price} gold</p>
        <img src="${item.img}" alt="${item.title}" class="cart-item-img" />
    `;

    // Append the item div to the container
    cartContainer.appendChild(itemDiv);

    // itemsInCart.textContent = `You have ${cart.length} item(s) in your cart.`;
    }
   )
   .catch(error => {
    console.error(error);
});
       
    }
}
// Call the function to display cart items
window.addEventListener("DOMContentLoaded", getItems);

function handleFormSubmit(event){
    //prevents refresh
    event.preventDefault()
    console.log("form submitted")
    //receive info
    const form=event.target;
const cardInfo={
    nameOnCard: form.querySelector("#card-name").value,
    cardNumber: form.querySelector("#card-number").value,
    expirationDate: form.querySelector("#exp-date").value,
    cvv: form.querySelector("#cvv-num").value
}
console.log("form submitted2", cardInfo)
    //show alert
const alert= document.getElementById("alert-box-total")
alert.classList.remove("d-none")

setTimeout(() => {
    alert.classList.add('d-none');
    //reload the page needed to show cart empty
    location.reload()
}, 2000); 
    //clean the form and cart!!!
    form.reset();
    //CLEAR CART
    localStorage.removeItem("cart");
}
function deleteItem(itemId) {
    // Get the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Filter out the item to delete based on its id
    cart = cart.filter(item => item.id !== itemId);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render the cart
    getItems();
}
