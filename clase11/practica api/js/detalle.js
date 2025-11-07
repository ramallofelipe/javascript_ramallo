let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let resultado = queryStringObj.get('id');   

console.log(resultado)

fetch(`https://rickandmortyapi.com/api/character/${resultado}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let nombre = document.querySelector('.h1Personajes')
  nombre.innerText = `${data.name}`
  let status = document.querySelector('.p1Personajes')
  status.innerText = `${data.status}`
  let especie = document.querySelector('.pPersonajes')
  especie.innerText = `${data.species}`
  let img = document.querySelector('.imgpersonajes')
  img.src = `${data.image}`
})
.catch(function(error) {
  console.log("Error: " + error);
})