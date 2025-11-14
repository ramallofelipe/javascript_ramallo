let formulario = document.querySelector("form")
let nombre = document.querySelector("#fullName")
let email = document.querySelector("#email")
let telefono = document.querySelector("#phone")
let contra = document.querySelector("#password")
let recontra = document.querySelector("#rePassword")
let submit = true

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    if (nombre.value == ""){
        let invalid = document.querySelector(".fullName")
        invalid.innerText = "Es obligatorio completar este campo"
        invalid.style.display = 'block'
    } else if (email.value == ""){
        let invalid = document.querySelector(".email")
        invalid.innerText = "Es obligatorio completar este campo"
        invalid.style.display = 'block'
    } else if (telefono.value == ""){
        let invalid = document.querySelector(".phone")
        invalid.innerText = "Es obligatorio completar este campo"
        invalid.style.display = 'block'
    } else if (telefono.value.length <= 7){
        let invalid = document.querySelector(".phone")
        invalid.innerText = "Minimo 8 caracteres"
        invalid.style.display = 'block'
    } else if (contra.value == ""){
        let invalid = document.querySelector(".password")
        invalid.innerText = "Es obligatorio completar este campo"
        invalid.style.display = 'block'
    } else if (contra.value.length <= 3){
        let invalid = document.querySelector(".password")
        invalid.innerText = "Minimo 4 caracteres"
        invalid.style.display = 'block'
    } else if (recontra.value == ""){
        let invalid = document.querySelector(".rePassword")
        invalid.innerText = "Es obligatorio completar este campo"
        invalid.style.display = 'block'
    } else if (recontra.value != contra.value){
        let invalid = document.querySelector(".rePassword")
        invalid.innerText = "No es igual a la contraseña ingresada"
        invalid.style.display = 'block'
    } else{
        this.submit()
    }
    
    
    
    
})
