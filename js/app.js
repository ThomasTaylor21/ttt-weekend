console.log("I am here")

console.log('f in chat')



/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares, winner, turn
// let playerTurn = [o,x]
// let gameOutcome = [tie, winner, loser]
const player0 = -1
const playerX = 1
//let winner = null

/*------------------------ Cached Element References ------------------------*/
const boardSquares = document.querySelector(".board")
console.log(boardSquares);
//Need a way to update board squares in the cached references. IN your render function, use squares - an array, to update board squares accordingly.

/*----------------------------- Event Listeners -----------------------------*/
boardSquares.addEventListener("click", handleClick);


/*-------------------------------- Functions --------------------------------*/
function  handleClick(event) {
  //console.log(event.target.id);
  //change the state of the squares in the handleClick function
  //string.slice- helps remove SQ
  //
  const id = event.target.id.replace('sq','')
  squares[id] = 1
  console.log(squares)
  if(squares === 1){
    return X
  } else if
    (squares === -1)
  render()
}

init();

function init() {

  squares = [
    null, null, null,
    null, null, null,
    null, null, null]
  console.log(squares)  //these nulls refer to the game board in order
  winnerCombos = [
    w1 = 0, 1, 2,
    w2 = 3, 4, 5,
    w3 = 6, 7, 8,
    w4 = 0, 3, 5
    w5 = 1, 4, 7
    w6 = 2, 5, 8
    w7 = 0, 4, 8
    w8 = 2, 4, 6
  ]
  let winningCombo(w1, w2, w3, w4, s6, w6, w7, w8)("then it is a tie")
}
  
winner = null;
  // let winner = 1{
  //   if winner = 0("I won")
  //   else winner = x ("X Wins!")

render()



function render() {

  for (let i = 0; i < squares.length; i++) {
    console.log(squares[i])
    if (squares[i] === 1) {
      boardSquares.children[i].textContent = 'x'
    } else (squares[i] !== -1)
      
      boardSquares.children[i].textContent = '0'
  }
} else (squares[i] !== null)
     if boardSquares.children[i].textContent = ''

  //else (boardSquares.children[i].textContent = '' )
    //if else statement could be good here
    //if the condition is true, then print a value to the board


//  need to use and innerText to message players




