function loadHTML( elementID, filePath){
    const element= document.getElementById(elementID);
    const xhr = new XMLHttpRequest();

    xhr.open('GET', filePath, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            element.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
function loadContactForm() {
const xhr = new XMLHttpRequest();
    xhr.open('GET', 'contactForm.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('contact-form-container').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

window.onload = function() {
    loadHTML('nav-container', 'nav.html');
    loadHTML('footer-container', 'footer.html');
    loadContactForm();
};
