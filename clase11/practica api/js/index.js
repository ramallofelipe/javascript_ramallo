fetch("https://rickandmortyapi.com/api/character")
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let personaje = document.querySelector('.characterList')
  let character = []
  for (let i=0; i<data.results.length ; i++){
      character.push(`<article id='${data.results[i].id}'>
        
         <img src='${data.results[i].image}' alt=''>
          <a href='detalle.html?id=${data.results[i].id}' value='${data.results[i].id}'><p>Name: ${data.results[i].name}</p></a>
          <p>Status: ${data.results[i].status}</p>
      </article>`)
  
}
let a = character.join('')
personaje.innerHTML = a

})
.catch(function(error) {
  console.log("Error: " + error);
})
