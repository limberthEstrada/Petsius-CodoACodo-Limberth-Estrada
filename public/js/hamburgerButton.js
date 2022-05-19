const button = document.querySelector('.icon-container')
const menuHam = document.querySelector(".menu-hamburger")

button.addEventListener("click",  
(e) => {
    e
        .currentTarget
        .classList
        .toggle("open")

    menuHam.classList.toggle("active")
})