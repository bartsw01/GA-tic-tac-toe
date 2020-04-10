console.log("I'm working");


let emptyGameBoard; // = ["", "", "", "", "", "", "", "", ""];
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
	// document.querySelector(".gameover").style.display = "none";
    emptyGameBoard = Array.from(Array(9).keys());
    console.log(emptyGameBoard);
// 	for (let i = 0; i < squares.length; i++) {
// 		squares[i].innerText = '';
// 		squares[i].style.removeProperty('background-color');
// 		squares[i].addEventListener('click', clickBoard, false);
// 	}
}



function clickBoard(square) {
    console.log(square.target.id)
	nextTurn(square.target.id, humanPlayer)
}
document.getElementById("sq0").addEventListener("click", clickBoard);
document.getElementById("sq1").addEventListener("click", clickBoard);
document.getElementById("sq2").addEventListener("click", clickBoard);
document.getElementById("sq4").addEventListener("click", clickBoard);
document.getElementById("sq5").addEventListener("click", clickBoard);
document.getElementById("sq6").addEventListener("click", clickBoard);
document.getElementById("sq7").addEventListener("click", clickBoard);
document.getElementById("sq8").addEventListener("click", clickBoard);


function nextTurn(squareId, player) {
    emptyGameBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
}
// let clickBoard = () => {
//     console.log("hello");
// };

// let nextTurn = (squareId, player) => {
// 	activeBoard[squareId] = humanPlayer;
// 	document.getElementById(squareId).innerText = humanPlayer;
// }


// let startGame = () => {
    

//     for (let i = 0; i < activeBoard.length; i++) {
//         // activeBoard[i].innerText = '';
//         //activeBoard[i].style.removeProperty('background-color');
        
//     }

// }




//*********************FRONT END LOGIC */

// let btn = document.getElementById('#btn');
// btn.addEventListener('click', clickBoard, false);
// activeBoard[i].addEventListener('click', clickBoard, false);



