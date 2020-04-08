console.log("I'm working");


const emptyGameBoard = ["", "", "", "", "", "", "", "", ""];
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



let clickBoard = () => {
    console.log("hello");
};

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

let btn = document.getElementById('#btn');
btn.addEventListener('click', clickBoard, false);
// activeBoard[i].addEventListener('click', clickBoard, false);

// const squares = document.querySelectorAll('.square');
// startGame();
// Create X in a square