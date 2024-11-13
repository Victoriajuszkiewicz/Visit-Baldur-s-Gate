fetch("shop.json")
.then(response => response.json())
.then( data =>{
console.log(data)
const shopItems=document.querySelector("#shop-cards-main");

//loop through all object (json database)
data.forEach(item =>{
const card= document.createElement('div');
card.classList.add("card", "col-3","col-md-3","col-lg-3", "shop-item-card");
card.innerHTML=`
<img src="${item.img}" class="card-img-top" alt="${item.title}/>
<div class="card-body">
<h5 class="card-title">${item.title}</h5>
<p class=item-price >${item.price} gold</p>
<i class="bi bi-cart"></i>
</div>
`;
shopItems.appendChild(card);
});
})
.catch(
    error=>{
        console.error(error);
    }
)



