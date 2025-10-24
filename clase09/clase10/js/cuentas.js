let numero = prompt("Ingresa un numero: ")
let numero2 = prompt("Ingresa un numero: ")

function multiplicar(num1, num2) {
    let resultado = num1 * num2
    return alert("El resultado de multiplicar " + num1 + " + " + num2 + " es = " + resultado)
}

console.log(multiplicar(numero, numero2))