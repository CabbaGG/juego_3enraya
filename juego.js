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
    
    let x = Array.from(document.getElementsByClassName('casilla')).map(e => e.textContent);
    console.log(x);

    if (x[0] === x[1] &&  x[0] === x[2] && x[1] === x[2] && x[0] != "") {
        console.log('ganaste hor1')
        btnReiniciar.style.display = 'block';
    } else if (x[3] === x[4] &&  x[3] === x[5] && x[4] === x[5] && x[3] != "") {
        console.log('ganaste hor2')
        btnReiniciar.style.display = 'block';
    } else if (x[6] === x[7] &&  x[6] === x[8] && x[7] === x[8] && x[6] != "") {
        console.log('ganaste hor3')
        btnReiniciar.style.display = 'block';
    } else if (x[0] === x[3] &&  x[0] === x[6] && x[3] === x[6] && x[0] != "") {
        console.log('ganaste vert1')
        btnReiniciar.style.display = 'block';
    } else if (x[1] === x[4] &&  x[1] === x[7] && x[4] === x[7] && x[1] != "") {
        console.log('ganaste vert2')
        btnReiniciar.style.display = 'block';
    } else if (x[2] === x[5] &&  x[2] === x[8] && x[5] === x[8] && x[2] != "") {
        console.log('ganaste vert3')
        btnReiniciar.style.display = 'block';
    } else if (x[0] === x[4] &&  x[0] === x[8] && x[4] === x[8] && x[0] != "") {
        console.log('ganaste diag1')
        btnReiniciar.style.display = 'block';
    } else if (x[2] === x[4] &&  x[2] === x[6] && x[4] === x[6] && x[2] != "") {
        console.log('ganaste diag2')
        btnReiniciar.style.display = 'block';
    } else if (CASILLAS_LLENAS == 9) {
        console.log('perdieron los dos')
        btnReiniciar.style.display = 'block';
    }
    
}

function reiniciar() {
    Array.from(document.getElementsByClassName('casilla')).forEach(e => e.textContent = "");
    CASILLAS_LLENAS = 0;
    btnReiniciar.style.display = 'none';
}

const casillas = document.getElementsByClassName('casilla');
for (const casilla of casillas) {
    casilla.addEventListener('click', marcarCasilla);
}

const btnReiniciar = document.getElementById('reiniciar');
btnReiniciar.addEventListener('click', reiniciar);