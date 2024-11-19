//fetch data from JSON
fetch('stays.json')
//json file need to be in html folder!
.then( response => response.json())
.then(data=>{
   // Now 'data' is a JavaScript object containing the parsed JSON
console.log(data)
//create card element
const container= document.querySelector('#cards-container');
 // Loop through the data array and create cards

 data.forEach(stay=>{
    const card= document.createElement('div');
    card.classList.add('card', 'col-sm-12','col-med-6', 'col-lg-6', 'col-xl-4', 'the-whole-card');
    card.innerHTML = `
    <img src="${stay.image}" class="card-img-top" alt="${stay.name}">
    <div class="card-body stays-body-card">
      <h5 class="card-title">${stay.name}</h5>
      <p class="card-text">${stay.location}</p>
      <p class="card-text"><strong>Price:</strong> ${stay.price} gold per night</p>
      <p class="card-text">
        <strong>Rating:</strong> ${'★'.repeat(stay.stars)}${'☆'.repeat(5 - stay.stars)} <!-- Generates star rating -->
      </p>
    </div>
  `;
container.appendChild(card);

});
})
.catch(
    error=> {
        console.error(error);
    }
)



