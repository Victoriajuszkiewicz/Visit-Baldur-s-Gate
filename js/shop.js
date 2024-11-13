const cart=[];

fetch("shop.json")
.then(response => response.json())
.then( data =>{
const shopItems=document.querySelector("#shop-cards-main");

//loop through all object (json database)
data.forEach(item =>{
const card= document.createElement('div');
card.classList.add("card", "col-3","col-md-3","col-lg-3", "shop-item-card");
card.innerHTML=`
<img src="${item.img}" class="card-img-top" alt="${item.title}"/>
<div class="card-body">
<h5 class="card-title">${item.title}</h5>
<p class=item-price >${item.price} gold</p>
     <i class="bi bi-cart" data-item='${JSON.stringify(item)}' onClick="addToCart(this)"></i>
</div>
`;
//passing the whole item object but there was an error!
//JSON.stringify(item) converts the object into a JSON string, but this string can contain quotes (" or ') that interfere with the surrounding HTML/JavaScript syntax. So, when the browser tries to parse this inline JavaScript code, it encounters an error because of the conflicting quotes.
shopItems.appendChild(card);
});
})
.catch(
    error=>{
        console.error(error);
    }
)

function addToCart(element){
    const item = JSON.parse(element.getAttribute('data-item')); // Retrieve the item from the data attribute
console.log("button clicked", item);
//add item to the cart 
//keep data saved in variable
cart.push(item);


// alert pop up - from bootstrap
const alert= document.getElementById('cart-alert');
alert.classList.remove("d-none")

setTimeout(() => {
    alert.classList.add('d-none');
}, 3000); 
}



console.log(cart)