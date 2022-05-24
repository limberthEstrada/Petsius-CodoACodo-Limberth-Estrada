let preguntas = document.querySelectorAll(".pregunta-box")
let preguntasAux = ["¿Qué es Petsius?", "¿Cómo funciona?", "¿En qué se diferencia una publicación hecha con Petsius de otras publicaciones?", "¿Por qué Petsius es la mejor opción para encontrar a tu mascota?", "¿Cómo sé que el anuncio fue hecho y se está difundiendo?", "¿Qué es un asesor personal?", "¿Quién hace la publicación?", "¿Quién es el creador de Petsius?", "¿Me garantizan encontrar mi mascota?", "¿Qué es la recompensa? ¿Cómo reclamarla?"]
let respuestas = ["Es una página para que puedas encontrar a tu mascota y realizar muchas cosas más", "Es simple, reportas tu perdida o ayudas a otros a encontrar a su mascota", "¿Qué esta página tiene un algoritmo muy poderoso que permite mostrar todas las publicaciones de las mascotas perdidas, si sos de la zona de perdida o pasaste cerca de ese lugar", "Porque ya tuvimos una cantidad importante de finales felices y estamos siempre en mejora constante para que nuestra plataforma sea las más eficiente posible", "Te enviaremos un e-mail con las estadisticas del número de personas que han visto e interactuado con tu publicación en todo momento", "Será la persona que se pondrá en contacto contigo si es que hay dudas o inconvenientes con la plataforma", "Podés hacerlo vos sólo o te podemos asignar un asesor que te ayudará", "Tú bébe Limberth Estrada ♥", "No. Sin embargo, te aseguramos que las probabilidades de encontrarla van a aumentar considerablemente porque vamos a ser miles de personas buscando en la zona donde es más probable que tu mascota esté.", "Es una opción por si vos querés retribuirle el favor a otra persona por encontrar a tu mascota ;)"]

for(let i=0; i<preguntas.length; i++)
{
    preguntas[i].addEventListener("click", function()
    {
        if(this.innerText.includes("¿"))
        {
            this.innerText = respuestas[i]
            this.classList.toggle("activated")
            console.log("avers")
        }           
        else
        {
            this.classList.remove("activated")
            this.innerHTML = preguntasAux[i] + "<i class='fa-solid fa-caret-down'></i>"
        }
    })
}