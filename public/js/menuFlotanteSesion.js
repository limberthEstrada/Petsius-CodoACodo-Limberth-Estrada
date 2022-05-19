const menuSesionIcon = document.querySelector(".menu-sesion")
const menuSesion = document.querySelector(".menu-sesion-papa")
const enlaceUser = document.querySelector("#enlaceUser")



enlaceUser.addEventListener("click", function(e)
{
    e.preventDefault()
})

menuSesionIcon.addEventListener("click", function()
{
    menuSesion.classList.toggle("active")
})


