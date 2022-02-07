console.log("I am here")
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6 ,7, 8],
  [0, 3, 5],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
let squares, winner, turn
// let gameOutcome = [isTie, winner, loser]
const player0 = -1
const playerX = 1
//const isTie = // === no winning combos found on the board, != winningCombos


/*------------------------ Cached Element References ------------------------*/
const boardSquares = document.querySelector(".board")
console.log(boardSquares);

// const winnerLoser = document.querySelector("#winnerloser")
// console.log(winnerloser)
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

const resetBtn = document.getElementById('resetBtn')

/*----------------------------- Event Listeners -----------------------------*/
boardSquares.addEventListener("click", handleClick);


/*-------------------------------- Functions --------------------------------*/
function  handleClick(event) {
  //console.log(event.target.id);
  //change the state of the squares in the handleClick function
  //string.slice- helps remove SQ
  //handle click function is running 
  //
  const id = event.target.id.replace('sq','')
  if (squares[id] === null){
    squares[id] = turn
    turn *= -1
    console.log(squares)
    render()
    getWinner()
  } 
}

init();

function init(){

squares = [
  null, null, null,
  null, null, null,
  null, null, null]
console.log(squares)  //these nulls refer to the game board in order

turn = 1
winner = null;

  render()
  // getWinner()
}


function render() {

  for (let i = 0; i < squares.length; i++){
  // console.log(squares[i])
    if (squares[i] === 1){
    boardSquares.children[i].textContent = 'x'
    } else if 
    (squares[i] === -1) {
    boardSquares.children[i].textContent = '0'
    } else {
    boardSquares.children[i].textContent = ""
    }
  }
  

  
}
resetBtn.addEventListener('click', init)
  render()
function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    const a = winningCombos[i][0]
    const b = winningCombos[i][1]
    const c = winningCombos[i][2]
    // console.log(winningCombos[i][0]+[1]+[2])
    if (squares[a] + squares[b] + squares[c] === 3) {
      console.log("X wins")
    } else if ((squares[a] + squares[b] + squares[c] === -3)) {
      console.log('O wins')
      
    }
    

    // if (squares === winningCombos[]))
  }
}
