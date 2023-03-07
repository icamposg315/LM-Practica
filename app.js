/**
 * 
 * TIC TAC TOE
 */

let jugador1 = 'X';
let jugador2 = 'O';

let turno = true;
let turno2 = false;

/**Utilizamos push para rellenar el array con las posiciones que se van dibujando, posteriormente se compara con la combinación ganadora */
let x = [];
let o = [];

turno = jugador1;
turno2 = jugador2;

/**
 * [0, 1, 2]
 * [3, 4, 5]
 * [6, 7, 8]
 *  
 */

// let tablero = ['', '', '', '', '', '', '', '', ''];
let tablero = document.getElementsByClassName('casilla');

/**
 * [3, 4, 5]
 * [0, 3, 6]
 * [1, 4, 7]
 * [2, 5, 8]
 * [0, 4, 8]
 * [2, 4, 6]
 * 
 */
let combinacionGanadora = [
    [3, 4, 5],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function ponerFicha() {

    /**Crear un método que elimine el atributo de onclick una vez tenga contenido */
    if(turno){
        /**Pinto X Utilizamos textContent
         * div[¿?]remove.Attribute('onclick')
         * Comprabamos si se ha ganado con funcion Ganador()
         * turno = false;
        */

    }else {
        /**Pinto O UTilizamos textContent
         * div[¿?]remove.Attribute('onclick')
         * Comprabamos si se ha ganado con funcion Ganador()
         * turno = true;
        */
    }
}

function GANAR_X() {
    let actual = [];
    // Recorrer las casillas para ver su contenido    
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i].innerHTML == 'X') {
            actual.push(i);
        }
    }
    /**     
    * Utilizar Array.include para comprobar si una de las combinaciones correctas     
    * esta incluida en mi array de actual     
    */

    for (let i = 0; i < combinacionGanadora.length; i++) {
        if (actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])) {
            alert('GANAN LAS X');
        }
    }
}

function GANAR_O() {
    let actual = [];
    // Recorrer las casillas para ver su contenido    
    for (let i = 0; i < tablero.length; i++) {
        if (tablero[i].innerHTML == 'O') {
            actual.push(i);
        }
    }
    /**     
    * Utilizar Array.include para comprobar si una de las combinaciones correctas     
    * esta incluida en mi array de actual     
    */

    for (let i = 0; i < combinacionGanadora.length; i++) {
        if (actual.includes(combinacionGanadora[i][0]) && actual.includes(combinacionGanadora[i][1]) && actual.includes(combinacionGanadora[i][2])) {
            alert('GANAN LAS O');
        }
    }
}

/**
 * La funcion ponerFicha, pide al usuario una posicion para insertar la ficha
 * Sil la posición está vacía, inserta y en caso contrario, vuelve a pedir la posición.
 */
function ponerFicha() {
    /**
     * Utilizamos el prompt para recoger la casilla del usuario
     */

    let c = prompt('Dime una casilla donde colocar la ficha');
    if (tablero[parseInt(c)].innerHTML == '') {
        tablero[parseInt(c)].innerHTML = 'X';
        GANAR_X();
    } else {
        alert('Esta casilla está ocupada');
        ponerFicha();
    }
}

ponerFicha();