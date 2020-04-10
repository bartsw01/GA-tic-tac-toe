console.log("I'm working on red");


var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

function clickBoard() {
    document.getElementById('sq0').style.color = "red";
    console.log("click showing");

};

document.getElementById('sq0').addEventListener('click', clickBoard);
// document.getElementById("sq1").addEventListener("click", clickBoard);
// document.getElementById("sq2").addEventListener("click", clickBoard);



