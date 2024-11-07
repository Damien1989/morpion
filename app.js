let currentPlayer = "X";

const info = document.querySelector("info")
info.textContent = `Au tour de ${currentPlayer}`

const cells = document.querySelectorAll("cell")

cells.forEach(cell => cell.addEventListener("click", handleClick))

const currentGame = ["", "", "", "", "", "", "", "", ""];