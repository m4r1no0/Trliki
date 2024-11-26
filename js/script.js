let matriz = [
    ['','',''],
    ['','',''],
    ['','','']
];

let caracter = 'x';
const caja = document.querySelector('.caja');
caja.addEventListener('click' ,(evento)=>{
    const cajita = document.querySelector('.cajita');
    let posicion = evento.target.getAttribute('id');

});

const opcion = document.querySelector('#jugadorUno');
opcion.addEventListener('change',()=>{
    console.log(opcion.value)
    if(opcion.value == "X"){
        const jugadorDosOpcionX = document.querySelector("#jugadorDos.X");
        jugadorDosOpcionX.disabled = true;
        const jugadorDosOpcionO = document.querySelector("#jugadorDos.O");
        jugadorDosOpcionO.disabled = false;
    }else if(opcion.value == "O"){
        const jugadorDosOpcionO = document.querySelector("#jugadorDos.O");
        jugadorDosOpcionO.disabled = true;
        const jugadorDosOpcionX = document.querySelector("#jugadorDos.X");
        jugadorDosOpcionX.disabled = false;
        
    }
});

const opcionDos = document.querySelector('#jugadorDos');
opcionDos.addEventListener('change',()=>{
    console.log(opcionDos.value)
    if(opcionDos.value == "X"){
        const jugadorUnoOpcionX = document.querySelector("#jugadorUno.X");
        jugadorUnoOpcionX.disabled = true;
        const jugadorUnoOpcionO = document.querySelector("#jugadorUno.O");
        jugadorUnoOpcionO.disabled = false;
    }else if(opcionDos.value == "O"){
        const jugadorUnoOpcionO = document.querySelector("#jugadorUno.O");
        jugadorUnoOpcionO.disabled = true;
        const jugadorUnoOpcionX = document.querySelector("#jugadorUno.X");
        jugadorUnoOpcionX.disabled = false;
        
    }
});
