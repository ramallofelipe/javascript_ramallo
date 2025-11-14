let peliculasFavoritas = ['Fight club','good will hunting','seven']
let peliculasJSON = JSON.stringify(peliculasFavoritas)
localStorage.setItem('favorita', peliculasJSON)
let recuperoStorag = localStorage.getItem('favorita')
let peliRecuperado = JSON.parse(recuperoStorag)
peliRecuperado.push('batman')
let peli = JSON.stringify(peliRecuperado)
localStorage.setItem('favorita', peli)

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
];

let winterIsComing = []

for (let i=0; i<got.length; i++){
    if ("Winterfell" == got[i].ciudad){
        winterIsComing.push(got[i])
    }
}
let winterJSON = JSON.stringify(winterIsComing)
localStorage.setItem('winterfell', winterJSON)
console.log(localStorage)