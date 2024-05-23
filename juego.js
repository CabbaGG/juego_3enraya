let juegan = "X"

function marcarCasilla(evt) {
    evt.currentTarget.textContent = juegan;
    if (juegan === "X") {
        juegan = "O";
    } else {
        juegan = "X";
    }
}


const casillas = document.getElementsByClassName('casilla');
for (const casilla of casillas) {
    casilla.addEventListener('click', marcarCasilla);
}