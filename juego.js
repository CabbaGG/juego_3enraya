let juegan = "X"
let CASILLAS_LLENAS = 0


function marcarCasilla(evt) {
    if (evt.currentTarget.textContent !== "") {
        return;
    }
    evt.currentTarget.textContent = juegan;
    if (juegan === "X") {
        juegan = "O";
    } else {
        juegan = "X";
    }
    CASILLAS_LLENAS++ ;
    evaluarPartida();
}

function evaluarPartida() {
    if (CASILLAS_LLENAS == 9) {
        btnReiniciar.style.display = 'block';
    }
}

function reiniciar() {
    
}

const casillas = document.getElementsByClassName('casilla');
for (const casilla of casillas) {
    casilla.addEventListener('click', marcarCasilla);
}

const btnReiniciar = document.getElementById('reiniciar');
btnReiniciar.addEventListener('click', reiniciar);