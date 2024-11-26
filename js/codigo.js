
let matriz =[
   ['a','b','c'],
   ['d','e','f'],
   ['g','h','i']
];

let caracter = 'X';


const caja = document.querySelector('.caja');
// caja.textContent = 'Esto es el texto';

caja.addEventListener('click',(cajitaClick)=>{
    // console.log(cajitaClick);
    let posicion = cajitaClick.target.getAttribute('id');
    // console.log(cajitaClick.target.textContent);
    if(cajitaClick.target.textContent == 'X' || cajitaClick.target.textContent == 'O'){
        alert("No se puede tramposo...");
    }else{
        cajitaClick.target.textContent = caracter;
        (posicion == '1') ? matriz[0][0] = caracter: false;
        (posicion == '2') ? matriz[0][1] = caracter: false;
        (posicion == '3') ? matriz[0][2] = caracter: false;
        (posicion == '4') ? matriz[1][0] = caracter: false;
        (posicion == '5') ? matriz[1][1] = caracter: false;
        (posicion == '6') ? matriz[1][2] = caracter: false;
        (posicion == '7') ? matriz[2][0] = caracter: false;
        (posicion == '8') ? matriz[2][1] = caracter: false;
        (posicion == '9') ? matriz[2][2] = caracter: false;

        (caracter == 'X') ? caracter = 'O': caracter = 'X';
        evaluar();
    };
    // console.log(matriz);
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

let nombreDos = '';
let nombre = '';

    const guardarJugador = document.getElementById('guardar');
    guardarJugador.addEventListener('click',function(){
        const inputJugadorUno = document.getElementById('uno');
        nombre=inputJugadorUno.value;

        const inputJugadorDos = document.getElementById('dos');
        nombreDos=inputJugadorDos.value;

        const triki = document.querySelector('.caja');
        triki.classList.remove('d-none');
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


let punto = 1;
let puntoDos = 1;
function evaluar(){
    let marca = document.querySelector('.marcadorUno');
    let marcaDos = document.querySelector('.marcadorDos')
    


    if(matriz[0][0] == matriz[0][1] && matriz[0][0] == matriz[0][2]){
        console.log(nombre);
        if(matriz[0][0] ==opcion.value){
            console.log(nombre);
            marca.textContent=punto++;
            limpiar();
            reiniciarJuego();
        }else if(matriz[0][0] ==opcionDos.value){
            console.log(nombreDos);
            marcaDos.textContent=puntoDos++;
            limpiar();
            reiniciarJuego();

        };
    };

    if(matriz[1][0] == matriz[1][1] && matriz[1][0] == matriz[1][2]){
        console.log(nombre);
        if(matriz[1][0] ==opcion.value){
            console.log(nombre);
            marca.textContent=punto++;
            limpiar();
            reiniciarJuego();
        }else if(matriz[1][0] ==opcionDos.value){
            console.log(nombreDos);
            marcaDos.textContent=puntoDos++;
            limpiar();
            reiniciarJuego();
        };
    };

    if(matriz[2][0] == matriz[2][1] && matriz[2][0] == matriz[2][2]){
        console.log(opcion.value);
        if(matriz[2][0] ==opcion.value){
            console.log(nombre);
            marca.textContent=punto++;
            limpiar();
            reiniciarJuego();
        }else if(matriz[2][0] ==opcionDos.value){
            console.log(nombreDos);
            marcaDos.textContent=puntoDos++;
            limpiar();
            reiniciarJuego();
        };
    };

    if(matriz[0][0] == matriz[1][0] && matriz[0][0] == matriz[2][0]){
        console.log(opcion.value);
        if(matriz[0][0] ==opcion.value){
            console.log(nombre);
            marca.textContent=punto++;
            limpiar();
            reiniciarJuego();
        }else if(matriz[0][0] ==opcionDos.value){
            console.log(nombreDos);
            marcaDos.textContent=puntoDos++;
            limpiar();
            reiniciarJuego();
        };
    };

    if(matriz[0][1] == matriz[1][1] && matriz[0][1] == matriz[2][1]){
        console.log(opcion.value);
        if(matriz[0][1] ==opcion.value){
            console.log(nombre);
            marca.textContent=punto++;
            limpiar();
            reiniciarJuego();
        }else if(matriz[0][1] ==opcionDos.value){
            console.log(nombreDos);
            marcaDos.textContent=puntoDos++;
            limpiar();
            reiniciarJuego();
        };
    };

    if(matriz[0][2] == matriz[1][2] && matriz[0][2] == matriz[2][2]){
        console.log(opcion.value);
        if(matriz[0][2] ==opcion.value){
            console.log(nombre);
            marca.textContent=punto++;
            limpiar();
            reiniciarJuego();
        }else if(matriz[0][2] ==opcionDos.value){
            console.log(nombreDos);
            marcaDos.textContent=puntoDos++;
            limpiar();
            reiniciarJuego();
        };
    };

    if(matriz[0][0] == matriz[1][1] && matriz[0][0] == matriz[2][2]){
        console.log(opcion.value);
        if(matriz[0][0] ==opcion.value){
            console.log(nombre);
            marca.textContent=punto++;
            limpiar();
            reiniciarJuego();;
            reiniciarJuego();
        }else if(matriz[0][0] ==opcionDos.value){
            console.log(nombreDos);
            marcaDos.textContent=puntoDos++;
            limpiar();
            reiniciarJuego();
        };
    };

    if(matriz[0][2] == matriz[1][1] && matriz[0][2] == matriz[2][0]){
        console.log(opcion.value);
        if(matriz[0][2] ==opcion.value){
            console.log(nombre);
            marca.textContent=punto++;
            limpiar();
            reiniciarJuego();
        }else if(matriz[0][2] ==opcionDos.value){
            console.log(nombreDos);
            marcaDos.textContent=puntoDos++;
            limpiar();
            reiniciarJuego();
        };
    };
};


function limpiar(){
    const celdas = document.querySelectorAll('.cajita');
celdas.forEach(celda => {
    celda.textContent = '';  // Limpiar el contenido de las celdas
});
};

function reiniciarJuego() {
    // 1. Restaurar la matriz a su estado inicial
    matriz = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ];
    console.log(matriz)
};