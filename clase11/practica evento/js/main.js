
window.addEventListener('load', function() {
    let titulo = document.querySelector('#titulo');
    let saludo = document.querySelector('#saludo');
    let span = document.querySelector('span');
    let personajes = this.document.querySelector('.personajes')
    titulo.addEventListener('mouseover', function() {
        let nombre = prompt('Como te llamas?');
        
        if (nombre.length === 0) {
            saludo.innerHTML = 'BIENVENID@';
        } else {
            saludo.innerHTML = 'BIENVENID@' + nombre;
        }
        
        saludo.style.textTransform = 'uppercase';
        
        titulo.style.display = 'none';
        
        
        if (span) {
            span.style.display = 'block';
        }
    });
    span.addEventListener('click', function(){
        let bienvenida = document.querySelector('.bienvenida')
        bienvenida.style.display = 'none';
        personajes.style.display = 'flex';
    })
    let bart = document.querySelector('#bart');
    let lisa = document.querySelector('#lisa');
    let homero = document.querySelector('#homero');
    let marge = document.querySelector('#marge');
    let maggie = document.querySelector('#maggie');
    let milhouse = document.querySelector('#milhouse');
    let burns = document.querySelector('#burns');
    let bob = document.querySelector('#bobPatinio');
    let flanders = document.querySelector('#flanders');
    let duffman = document.querySelector('#duffman');
    let gorgory = document.querySelector('#gorgory');
    let nelson = document.querySelector('#nelson');
    
    bart.addEventListener('click', function(){
        bart.style.backgroundColor = 'yellow';
    })
    homero.addEventListener('click', function(){
        homero.style.backgroundColor = 'yellow';
    })
    milhouse.addEventListener('click', function(){
        milhouse.style.backgroundColor = 'yellow';
    })
    nelson.addEventListener('click', function(){
        nelson.style.backgroundColor = 'yellow';
    })
    lisa.addEventListener('dblclick', function(){
        lisa.style.backgroundColor = 'yellow';
    })
    bob.addEventListener('dblclick', function(){
        bob.style.backgroundColor = 'yellow';
    })
    duffman.addEventListener('dblclick', function(){
        duffman.style.backgroundColor = 'yellow';
    })
    marge.addEventListener('mouseover', function(){
        marge.style.backgroundColor = 'yellow';
    })
    burns.addEventListener('mouseover', function(){
        burns.style.backgroundColor = 'yellow';
    })
    flanders.addEventListener('mouseover', function(){
        flanders.style.backgroundColor = 'yellow';
    })
    gorgory.addEventListener('mouseover', function(){
        gorgory.style.backgroundColor = 'yellow';
    })
    maggie.addEventListener('mouseout', function(){
        maggie.style.backgroundColor = 'yellow';
    })
    console.log(click)
    let boton = document.querySelector('.boton');
    
});
