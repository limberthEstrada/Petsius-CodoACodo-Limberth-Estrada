const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const email = document.querySelector("#email-contact")
const telefono = document.querySelector("#telefono")
const mensaje = document.querySelector("#mensaje")




nombre.addEventListener("blur", (e) => validarCampo(e))
apellido.addEventListener("blur", (e) => validarCampo(e))
email.addEventListener("blur", (e) => validarEmail(e))
telefono.addEventListener("blur", (e) => validarCampo(e))
mensaje.addEventListener("blur", (e) => validarCampo(e))



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

const validarCampo = (e) =>
{
    const campo = e.target;
    const valorDelCampo = e.target.value;
    if(valorDelCampo.trim().length == 0)
    {
        setErrors(campo, "El campo no puede quedar vacio")
    }
    else
    {
        if(valorDelCampo.trim().length > 1 && valorDelCampo.trim().length < 3)
        {
            setErrors(campo, "Se esperan más de 3 caracteres")
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