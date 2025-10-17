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

let misDatos = {
    nombre : 'Felipe',
    apellido : 'Ramallo',
    dni : 47432374,
    comidaFavoritas : ['pizza', 'empanadas', 'hamburguesa'],
    edad : 19,
    saludar : function(){
        return "Hola mi nombre es " +  this.nombre + " " +this.apellido + " y tengo "  + this.edad + " años. Mi primer comida favorita es " + this.comidaFavoritas[0];
    }
}
console.log(misDatos.saludar())

let auto = {
    marca : 'honda',
    modelo : 'hrv',
    anio : '2018',
    color : 'azul',
    posicion : 0,
    avanzar : function(n){
        return this.posicion = this.posicion + n
    },
    retroceder : function(n){
        return this.posicion = this.posicion - n
    }
}
auto.avanzar(10)
console.log(auto.posicion)

let nuevoAuto = {
    marca : 'honda',
    modelo : 'hrv',
    anio : '2018',
    color : 'azul',
    posicion : 0,
    moverse : function(n){
        return this.posicion = this.posicion + n
    }
}
nuevoAuto.moverse(-10)
console.log(nuevoAuto.posicion)

let ironMan = {
    nombre  : "Iron Man",
    equipo : "Avengers",
    poderes : ["Volar", "Lanzar misiles", "Disparar láser"],
    energia  : 100,
    getPoder : function(n){
        this.energia = this.energia -10
        return "Poder elegido de " + this.nombre + ": " + this.poderes[n] + ". Energia restante: " + this.energia + "."
    }
}
console.log(ironMan.getPoder())
let Hulk = {
    nombre  : "hulk",
    equipo : "Avengers",
    poderes : ["Aplastar", "Gritar", "Golpear"],
    energia  : 100,
    getPoder : function(n){
        this.energia = this.energia -10
        return "Poder elegido de " + this.nombre + ": " + this.poderes[n] + ". Energia restante: " + this.energia + "."
    }
}
    

console.log(Hulk.getPoder(1))
console.log(ironMan.getPoder(0))
console.log(Hulk.getPoder(0))
console.log(ironMan.getPoder(2))
console.log(Hulk.getPoder(1))
console.log(ironMan.getPoder(0))
console.log(Hulk.getPoder(1))
console.log(ironMan.getPoder(2))
console.log(Hulk.getPoder(2))
console.log(ironMan.getPoder(1))
console.log(Hulk.getPoder(1))
console.log(ironMan.getPoder(2))
console.log(Hulk.getPoder(0))
console.log(ironMan.getPoder(1))
console.log(Hulk.getPoder(1))
console.log(ironMan.getPoder(0))
console.log(Hulk.getPoder(2))
console.log(ironMan.getPoder(0))

for (let i=0; i<5; i++) {
    console.log('Practicando con el bucle for ');
}
for (let i=0; i<10; i++) {
    console.log('La variable i tiene el valor ' + i);
}
let ganancias = [3213, -4829, 756, 8970, -3051, -8705, 1601, 2630, 5875,  -7301, 3041, 686]
for (let i=0; i<ganancias.length; i++){
    console.log(ganancias[i])
}
let suma = 0;
for (let i=0; i<ganancias.length; i++){
    suma = ganancias[i] + suma
}
console.log(suma)


let healingIsDifficult = ['Fear', 'Drink to Get Drunk', 'Taken for Granted', 'Blow It All Away', 'Get Me', 'Im Not Important to You', 'Sober and Unkissed', 'Healing Is Difficult', 'Judge Me', 'Little Man', 'Insidiously']
for (let i=0; i<healingIsDifficult.length; i++){
    console.log(healingIsDifficult[i])
}

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]
for (let i=0; i<got.length; i++){

    console.log('soy ' + got[i].nombre + ' ' + got[i].apellido + ' de la ciudad ' + got[i].ciudad)
}
