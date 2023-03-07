
/**
 * 
 * TIC TAC TOE
 */

/**
 * COSAS A IMPLEMENTAR:
 * - No poner mas fichas
 * - Contador de puntuación por equipo
 * - Reinicio tablero para volver a jugar
 * - Mostrar color línea ganadora
 * - Contador de tiempo para cambiar turno si se agota el tiempo
 * - Unificar dos funciones que hagan lo mismo, en una (Ganar_X y Ganar_O en una funcion ganador(X, O))
 * - Comentario en las cabeceras de las funciones (@param, @return)
 * - Creación de las variables arriba del código (Buenas prácticas con variables)
 * - No errores en consola
 * - Estilos (Diseño ingenioso)
 * - GitHub
 */


let jugador1 = 'X';
let jugador2 = 'O';

/**Utilizamos push para rellenar el array con las posiciones que se van dibujando, posteriormente se compara con la combinación ganadora */
let x = [];
let o = [];


/**
 * [0, 1, 2]
 * [3, 4, 5]
 * [6, 7, 8]
 *  
 */

// let tablero = ['', '', '', '', '', '', '', '', ''];
let tablero = document.getElementsByClassName('casilla');

/**
 * Aquí vamos a introducir los elementos de click
 * Evento click como atributo en etiqueta.
 * El contenido del click es una función
 */
for (let i = 0; i < tablero.length; i++) {
    tablero[i].setAttribute('onclick', `pintaConsola(${i})`);
}

/**
 * Variable turno.
 * -    true: pintar X
 * -    false: pintar O
 */
let turno = true;
function pintaConsola(numero) {
    if (turno) {
        tablero[numero].textContent = 'X';

        GANAR_X();
    } else {
        tablero[numero].textContent = 'O';
        GANAR_O();
    }
    tablero[numero].removeAttribute('onclick');
    turno = !turno;
}
/**
 * Combinaciones ganadoras salvo las horizontales
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
