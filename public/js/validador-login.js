const emailInput = document.querySelector("#emailInput")
const passInput = document.querySelector("#passInput")
const pEmail = document.querySelector(".email")
const pPass = document.querySelector(".pass")
const main = document.querySelector("main")

emailInput.addEventListener("click", function()
{
        pEmail.classList.add("emailActive")
    
})

pEmail.addEventListener("click", function()
{
    
        pEmail.classList.add("emailActive")
    
    
    emailInput.focus()
})



emailInput.addEventListener("blur", (e) => validarEmail(e))



passInput.addEventListener("click", function()
{
    
        pPass.classList.add("passActive")
    
    
    
})

pPass.addEventListener("click", function()
{
    
        pPass.classList.add("passActive")
    
    
    passInput.focus()
    
})

passInput.addEventListener("blur", (e) => validarPass(e))


//Validaciones
const validarEmail = (e) =>
{
    
    const campo = e.target;
    const valorDelCampo = e.target.value;
    const regex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)

    if(valorDelCampo.trim().length == 0)
    {
        setErrors(campo, "El campo de e-mail no puede quedar vacio pa")
    }
    else
    {
        if(valorDelCampo.trim().length > 1 && valorDelCampo.trim().length < 5)
        {
            setErrors(campo, "Se esperan más de 5 caracteres en el e-mail")
        }
        else
        {
            if(valorDelCampo.trim().length > 5 && !regex.test(valorDelCampo))
            {
                setErrors(campo, "Formato incorrecto de e-mail")
            }
            else
            {
                setErrors(campo, "", false)
            }
            
        }
        
    }
}

const validarPass = (e) =>
{
    const campo = e.target;
    const valorDelCampo = e.target.value;
    if(valorDelCampo.trim().length == 0)
    {
        setErrors(campo, "El campo de contraseña no puede quedar vacio pa")
    }
    else
    {
        if(valorDelCampo.trim().length > 1 && valorDelCampo.trim().length < 5)
        {
            setErrors(campo, "Se esperan más de 5 caracteres en la contraseña")
        }
        else
        {
            setErrors(campo, "", false)
            
        }
        
    }
    
}




const setErrors = (campo, mensaje, isError = true) => {
    if(isError)
    {
        campo.classList.add("invalido")
        campo.nextElementSibling.classList.add("error")
        campo.nextElementSibling.innerHTML = mensaje 
    }
    else
    {
        campo.classList.remove("invalido")
        campo.nextElementSibling.classList.remove("error")
        campo.nextElementSibling.innerHTML = ""
    }
}