export default class Board {

  /**
      * Initialize the properties and onbjets 
  */
  constructor() {
    this.playerX = 'x';
    this.playerO = 'o';
    this.boardRows = 3;
    this.boardCols = 3;
    this.boardCells = [
      Array(3).fill(''),
      Array(3).fill(''),
      Array(3).fill('')
    ];
  }  

  /**
      * setPlayer Function used to set the player input to the x,y position's cell on the board
      * @param    {int} x
      * @param    {int} y
      * @param    {String} player
      * @return   {boolean} true|false  
  */
  setPlayer(x, y, player) {
  
    if (this.boardCells[x][y] !== '') {
      return false;
    }

    this.boardCells[x][y] = player;
    return true;
  } 

  /**
    * Function used to validate winning possibility of current player 
    * @param    {String} player
    * @return   {boolen} true|false 
  */
  winningMove(player) {
    // Validate horizontal row sets
    for (let i=0; i<this.boardRows; i++) {
      var horizontalRowSet  = this.boardCells[0][i]+this.boardCells[1][i]+this.boardCells[2][i];
      if(horizontalRowSet == player+player+player){
        return true;
      }      
    }

    // Validate vertical column sets
    for (let i=0; i<this.boardCols; i++) {
      var verticalColSet  = this.boardCells[i][0]+this.boardCells[i][1]+this.boardCells[i][2];
      if(verticalColSet==player+player+player){
        return true;
      }
    }

    // Validate diagonals sets
    var diagonalSet1 = this.boardCells[0][0]+this.boardCells[1][1]+this.boardCells[2][2];
    if(diagonalSet1 == player+player+player){
      return true;
    }    
    var diagonalSet2 = this.boardCells[2][0]+this.boardCells[1][1]+this.boardCells[0][2];
    if(diagonalSet2 == player+player+player){
      return true;
    }    

    return false;
  }
  
  /**
    * Function used to get the unoccupied or empty board cells and returns as an array 
    * @param    void
    * @return   {Array} 
  */
  getPossibleRemainingCells() {
    let boardremainingCells = [];
    for (let i=0; i<this.boardRows; i++) {
      for (let j=0; j<this.boardCols; j++) {
        if (this.boardCells[i][j] === '') {
          boardremainingCells.push({x: i, y: j});
        }
      }
    }    
    return boardremainingCells;
  }

  /**
    * Function is used to check game status, if game ends returns true else return false
    * @param    void
    * @return   {boolen} true|false  
  */
  checkGameStatus() {
    return this.getPossibleRemainingCells().length === 0 || this.winningMove(this.playerX) || this.winningMove(this.playerO);
  }
}
