function loadHTML( elementID, filePath){
    const element= document.getElementById(elementID);
    fetch(filePath)
    .then(response=> response.text())
.then(data => {
    element.innerHTML= data;
})
.catch(error => {
    console.error('Error loading HTML', error);
})
}


function loadContactForm() {
    fetch('contactForm.html')
        .then(response => response.text())  // Get the content as text
        .then(html => {
            document.getElementById('contact-form-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the contact form:', error);
        });
}


window.onload = function() {
    loadHTML('nav-container', 'nav.html');  // Load the nav into the div with id 'nav-container'
    loadHTML('footer-container', 'footer.html'); // Load the footer into the div with id 'footer-container'
    loadContactForm();  // Load the contact form dynamically
};
