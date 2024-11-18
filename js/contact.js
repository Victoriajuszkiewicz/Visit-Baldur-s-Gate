function handleForm(event){
    //prevents refresh
    event.preventDefault()
    //receive uinfo from form
    const form=event.target;
    const formInfo={
        nameonForm: form.querySelector("#name").value,
        emailonForm: form.querySelector("#email").value,
    pigeonNo: form.querySelector("#pigeonNumber").value,
    };
const alert= document.getElementById("alert-box");
 alert.classList.remove("d-none");
setTimeout(()=>{
    location.reload()
}, 2000);
//clean the form
    console.log("button clicked here!!!", formInfo )
   //clean the form and cart!!!
   form.reset();
}
