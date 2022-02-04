console.log("I am here")
/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//// 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined

	// 1.1) Use an array to represent the squares on the board.    

let squares, turn, winner
	// 1.2) Use a turn variable to track whose turn it is.

	// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.


/*------------------------ Cached Element References ------------------------*/

const boardSquares = document.querySelector(".board")
console.log(boardSquares);

// const boardSquares = document.querySelector("#message")
/*----------------------------- Event Listeners -----------------------------*/

boardSquares.addEventListener("click", handleClick);

/*-------------------------------- Functions -------------------------------*/



function handleClick(event) {
console.log(event.target.id)
  
}
console.log(boardSquares)