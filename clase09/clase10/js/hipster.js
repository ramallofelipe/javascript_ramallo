let nac = prompt("Nacionalidad:")
let prof = prompt("Profesion:")
let km = prompt("Cuantos km caminas por dia:")

function filosofoHipster(a, b, c) {
    if (a == "argentino" && b == "musico" && c > 2){
        return "Soy un filosofo hipster"
    } else {
        return "Aun no soy un filosofo hipster"
    }
}

console.log(filosofoHipster(nac, prof, km))