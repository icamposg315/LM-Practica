let turno = true;
let tablero;
let posicionesX = [];
let posicionesO = [];
let reinicio;
let boton;
let clasificacion;
let cuentaPartida;
let jugadores;

//Contador
clasificacion = document.getElementsByClassName('container')[0];
cuentaPartida = document.createElement('div');
cuentaPartida.setAttribute('class', 'resultados');
cuentaPartida.textContent = 'Contador';
clasificacion.appendChild(cuentaPartida);
jugadores = document.createElement('div');
jugadores.setAttribute('class', 'score');
cuentaPartida.appendChild(jugadores);

//Tablero Juego
tablero = document.getElementsByClassName('casilla');

//Boton reinicio
reinicio = document.getElementsByClassName('fila')[1];
boton = document.createElement('button');
boton.setAttribute('class', 'reinicio');
boton.setAttribute('onclick', `ReinicioTablero()`);

boton.textContent = '¡Volver a jugar!';
reinicio.appendChild(boton);

combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < tablero.length; i++) {
    tablero[i].setAttribute('onclick', `pintaCasilla(${i})`);
}

function ReinicioTablero() {
    for (let i = 0; i < tablero.length; i++) {
        tablero[i].textContent = "";
        tablero[i].setAttribute('onclick', `pintaCasilla(${i})`);
    }

}

function pintaCasilla(i) {

    let contadorX;
    let contadorO;

    if (turno) {
        tablero[i].textContent = 'X';
        posicionesX.push(i);
        posicionesX.sort();
        if (posicionesX.length >= 3) {
            hayGanador(posicionesX);
            contadorX++;
        }
    } else {
        tablero[i].textContent = 'O';
        posicionesO.push(i);
        posicionesO.sort();
        if (posicionesO.length >= 3) {
            hayGanador(posicionesO);
            contadorO++;
        }
    }
    tablero[i].removeAttribute('onclick');
    turno = !turno;
}

function hayGanador(posicionesXO) {
    //CombinaciónGanadora es un array con todas las combinaciones que dan resultado correcto
    for (let i = 0; i < combinacionGanadora.length; i++) {
        //Posiciones es un array con cada una de las posiciones que contiene el array
        let contador = 0;
        for (let j = 0; j < posicionesXO.length; j++) {
            if (combinacionGanadora[i].includes(posicionesXO[j])) {
                contador++;
            }
        }
        if (contador == 3) {
            //¿Quién gana? X u O
            // Si he detectado cual es la combinación ganadora, la recorro y pinto
            if (turno) {
                alert('Ha ganado X');

            } else {
                alert('Ha ganado O');
            }
            for (let k = 0; k < combinacionGanadora[i].length; k++) {
                tablero[combinacionGanadora[i][k]].style.backgroundColor = 'green';
            }
        }

    }
    finalizar();
}

function finalizar() {
    for (let i = 0; i < tablero.length; i++) {
        tablero[i].removeAttribute('onclick');
    }
}

function contador() {

    
}


