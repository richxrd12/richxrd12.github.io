const name = document.getElementById('name')
const email = document.getElementById('email')
const mensaje = document.getElementById('mensaje')
const form = document.getElementById('formulario')

form.addEventListener('submit', e=>{
    e.preventDefault()

    let regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

    if(nombre.value.length <= 5){
        alert("El nombre tiene que tener más de 5 caracteres")
    }
    if(!regexEmail.test(email.value)){
        alert("El email no es válido")
    }
    if(mensaje.value.length < 10){
        alert("El mensaje tiene que contener más de 10 caracteres")
    }

})