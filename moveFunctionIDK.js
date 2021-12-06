function getAvailableMoves(boardState,tilex,tiley,playerColor){
  // get list of possible moves for this square
  var square = translateSquare(tilex,tiley);
  var possibleMoves = game.moves({
    square: square,
  })
  // exit if there are no moves available for this square
  if (possibleMoves.length === 0) return
  // highlight the possible squares for this piece
  for (var i = 0; i < possibleMoves.length; i++) {
    //greySquare(moves[i].to)
    console.log(possibleMoves[i].to);
  }
  return possibleMoves;
}
function getAllAvailableMoves(boardState,tilex,tiley,playerColor){
  
}
function translateMovesList(moves){
  
}
function translateSquare(tilex,tiley){
  var squareReturn = "";
  switch (tilex) {
    case (tilex===0):
    squareReturn += "a";
    break;
    case (tilex===1):
    squareReturn += "b";
    break;
    case (tilex===2):
    squareReturn += "c";
    break;
    case (tilex===3):
    squareReturn += "d";
    break;
    case (tilex===4):
    squareReturn += "e";
    break;
    case (tilex===5):
    squareReturn += "f";
    break;
    case (tilex===6):
    squareReturn += "g";
    break;
    case (tilex===7):
    squareReturn += "h";
    break;
  }
  var number1 = tiley+1;
  squareReturn += (number1.toString());
  return squareReturn;
}
