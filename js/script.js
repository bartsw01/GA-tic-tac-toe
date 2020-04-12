console.log("I'm working");


let emptyGameBoard = ["", "", "", "", "", "", "", "", ""];
const humanPlayer = 'X';
const computerPlayer = 'O';
const winningCombos = [
    [0, 1, 2], // across top row
    [3, 4, 5], // across middle row
    [6, 7, 8], // across bottom row
    [0, 3, 6], // top left to bottom left
    [1, 4, 7], // top middle to bottom middle
    [2, 5, 8], // right top to right bottom
    [0, 4, 8], // diagonal top left to bottom right
    [6, 4, 2]  // diagonal bottom left to top right
];

// let activeBoard = emptyGameBoard

const squares = document.querySelectorAll('.square');
startGame();

function startGame() {
	document.querySelector(".gameover").style.display = "none";
    emptyGameBoard = Array.from(Array(9).keys());
    console.log(emptyGameBoard);
	for (let i = 0; i < squares.length; i++) {
		squares[i].innerText = '';
		squares[i].style.removeProperty('background-color');
		// squares[i].addEventListener('click', clickBoard, false);
	}
}



function clickBoard(square) {
    console.log(square.target.id)
	nextTurn(square.target.id, humanPlayer)
}
document.getElementById("sq0").addEventListener("click", clickBoard);
document.getElementById("sq1").addEventListener("click", clickBoard);
document.getElementById("sq2").addEventListener("click", clickBoard);
document.getElementById("sq3").addEventListener("click", clickBoard);
document.getElementById("sq4").addEventListener("click", clickBoard);
document.getElementById("sq5").addEventListener("click", clickBoard);
document.getElementById("sq6").addEventListener("click", clickBoard);
document.getElementById("sq7").addEventListener("click", clickBoard);
document.getElementById("sq8").addEventListener("click", clickBoard);


function nextTurn(squareId, player) {
    emptyGameBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    checkWinner();
}

// Create checkWinner function and gameOver function

function checkWinner () {
    if (squares[0].textContent === 'X' && squares[1].textContent === 'X' && squares[2].textContent === 'X') {
        alert("X wins Top Row Across!");
    } else if (squares[3].textContent === 'X' && squares[4].textContent === 'X' && squares[5].textContent === 'X') {
        alert("X wins Middle Row Across");
    } else if (squares[6].textContent === 'X' && squares[7].textContent === 'X' && squares[8].textContent === 'X') {
        alert("X wins Bottom Row Across");
    } else if (squares[0].textContent === 'X' && squares[4].textContent === 'X' && squares[8].textContent === 'X') {
        alert("X wins Diagonal Top Left to Bottom Right")
    } else if (squares[2].textContent === 'X' && squares[4].textContent === 'X' && squares[6].textContent === 'X') {
        alert("X wins Diagonal Top Right to Bottom Left")
    }

}



//*********************FRONT END LOGIC */

// let btn = document.getElementById('#btn');
// btn.addEventListener('click', clickBoard, false);
// activeBoard[i].addEventListener('click', clickBoard, false);



