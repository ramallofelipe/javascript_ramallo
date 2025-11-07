let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

let resultado = queryStringObj.get('buscador');   



fetch(`https://rickandmortyapi.com/api/character/?name=${resultado}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let res = document.querySelector(".search-results")
  let character = []
  for (let i=0; i<data.results.length ; i++){
      character.push(`<article>
     <img src='${data.results[i].image}'alt='' />
     <p>Name: ${data.results[i].name}</p>
     <p>Status: ${data.results[i].status}</p>
 </article>`)
}
let a = character.join('')
console.log(a)
res.innerHTML = a
})
.catch(function(error) {
  console.log("Error: " + error);
})

