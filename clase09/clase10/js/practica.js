alert("Bienvenidos a mi sitio.")
let a = confirm("Estas seguro de querer avanzar?")
if (a){
    document.querySelector(".saludo").innerText = "Que alegria que quieras continuar tu visita."
} else {
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita"
}
let nombre = prompt("Nombre:")
document.querySelector("h1").innerText = "Bienvenido " + nombre

let edad = prompt("Edad:");
console.log(edad)
if (edad < 18){
    let ocultar = document.querySelector(".container-general")
    ocultar.style.display = "none"
    let mostrar = document.querySelector("#accesoDenegado")
    mostrar.style.display = "block"
} 

let si = confirm("Te gusta la programacion?")
if (si == true)  {
    document.querySelector(".background-img").innerHTML =  "<img src='./img/programmer.jpeg' alt=''>"
} else {
    document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg' alt=''>"
}


let link = prompt("Copia el link de una imagen que quieras agregar.")
let messi = document.querySelector(".avatar")
messi.src = link

let nom = prompt("Nombre de tu pelicula favorita?")
let dir = prompt("director de tu pelicula favorita?")
let dur = prompt("duracion de tu pelicula favorita?")
let act = prompt("actor de tu pelicula favorita?")

let pelicula = {
    nombre : nom,
    director : dir, 
    duracion : dur,
    actor : act
}

let contenedor = document.querySelector("#pelicula")
let list = document.querySelector("#pelicula ul")
contenedor.style.display = "block"
list.style.display = "block"


document.querySelector("#nombre").innerHTML = pelicula.nombre
document.querySelector("#director").innerText = pelicula.director
document.querySelector("#duracion").innerText = pelicula.duracion
document.querySelector("#actor").innerText = pelicula.actor

