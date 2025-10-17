function rectangulo(altura, ancho) {
    let area = altura * ancho
    return area
}

console.log(rectangulo(2,4));

function triangulo(altura, ancho) {
    let area_triangulo = (altura * ancho) / 2
    return area_triangulo
}

console.log(triangulo(2,4));

function dolarhoy(pesos){
    return pesos / 1417
}

console.log(dolarhoy(1));

function preciofinal(precio) {
    let preciof = precio * 1.21
    return preciof
}

console.log(preciofinal(200));

function mitad(num) {
    let miti = num / 2
    return miti
}

console.log(mitad(4));

function sumar(num1, num2){
    return num1 + num2
}
function restar(num1, num2){
    return num1 - num2
}
function multiplicar(num1, num2){
    return num1 * num2
}
function dividir(num1, num2){
    return num1 / num2
}

function calculadora(num1,num2,operacion){
    return operacion(num1,num2)
}
console.log(calculadora(2,2,sumar));
console.log(calculadora(2,2,multiplicar));
console.log(calculadora(2,2,dividir));
console.log(calculadora(2,2,restar));

