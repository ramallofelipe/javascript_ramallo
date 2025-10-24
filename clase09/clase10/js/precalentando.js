let mensaje = "¿Vas a salir de tu casa?"
let respuesta = confirm(mensaje)

if (respuesta == true){
    alert("Chequeá el pronóstico del tiempo antes de salir")
} else {
    alert("Que bueno que te quedes. Va a llover mucho hoy.")
}

let nombre = prompt("Cual es tu nombre?")
console.log(nombre)

let edad = prompt("Cuantos años tenes?")
console.log(edad)

let fanDeportes = confirm("Sos fan de los deportes")
console.log(fanDeportes)

alert("Muchas gracias " + nombre + " por responder nuestras preguntas")

let usuario = {
    nombre  : nombre,
    edad : edad,
    deportes : fanDeportes,
    deportistaProfesional : function(){
        if (this.deportes == true){
           return "Si, soy fan de los deportes"
    } else {
          return "No soy tan fan aún de los deportes"
    }}
    }

console.log(usuario.deportistaProfesional())


