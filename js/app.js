console.log('f in chat')



/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squares, winner, turn
// const player0 = -1
// const playerX =  1
// winner = null 
// let tie= 'T'
/*------------------------ Cached Element References ------------------------*/
const boardSquares = document.querySelector(".board")
// console.log(boardSquares);


/*----------------------------- Event Listeners -----------------------------*/
boardSquares.addEventListener("click", handleClick);
//need art wau to  update the board waw in ref. in render function us an array to update the board squeares

/*-------------------------------- Functions --------------------------------*/

function handleClick(event) {
  console.log(event.target.id.replace(('sq',' ')));
  //change the state of the wquares
  // look up string.prototype.splice to remove the sq
  //on then need to access square[] to reassign value
  //
  const id = event.target.id
  squares[id] = 1
  console.log(squares)
}

// console.log(boardSquares)



function init() {
  squares = [
    null, null, null,
    null, null, null,
    null, null, null
  ]
  console.log(squares)  //these nulls refer to the game board in order

  // turn = {
  //   '1': {
  //     name: 'X'
  //   }, '2': {
  //     name: '0'
  //   }
  winner = null;
  }

// render();

//3.3
init ()

function render() {
  for(let i = 0; i < squares.length; i++) {
   console.log(squares[i])
  
  
  }
}