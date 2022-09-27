let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick =() =>{
    navbar.classList.toggle("menu-icon");
    menu.classList.toggle("move");
}


function validate(){
    let name =document.querySelector(".name")
    let email =document.querySelector(".email")
    let message =document.querySelector(".message")
    let sending =document.querySelector(".sending")

    sending.addEventListener('click', (e) =>{
        e.preventDefault();
        if(name.value == ""|| email.value == "" || message.value ==""){
            emptyerror();
        } else{
            sendmail (name.value,email.value, message.value);
            success();
        }
        });

}

let header = document.querySelector("header");
window.addEventListener("scroll",() => {
    header.classList.toggle("header-active",window.scrollY > 0);
});

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll",() =>{
    scrollTop.classList.toggle("scroll-active",window.scrollY >= 400);
});
