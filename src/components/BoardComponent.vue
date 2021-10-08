<template>
  <div>
    <div class="clsTitle">
      <h1>Tic Tac Toe Game</h1>
    </div>
    <div class="clsSubTitle" v-if="gameEnd==false">
      <h3>Player {{activePlayer}}'s turn </h3>
    </div>
    <div class="clsTitle" v-if="gameEnd==true">
      <h3><button class="clsBtnBackground clsBtn"  @click="this.newGame">New Game</button></h3>
    </div>
    <div class="clsBoardGrid">
      <div v-for="(n, row) in board.boardRows">
        <div v-for="(n, col) in board.boardCols">
          <cell-component @click="handleMove(col, row)"
                :value="board.boardCells[col][row]"
          />
        </div>
      </div>

      <div class="clsGameEndText clsSubTitle" v-if="gameEnd">
        {{ gameEndText }}
      </div>
    </div>
  </div>
</template>
<script>
  import Board from "../Board";


  export default {
  
    /**
      * Function to create component instance 
      * @param    void
      * @return   object  
      */
    data() { return {
      activePlayer: 'x',
      gameEnd: false,
      gameEndText: '',
      board: new Board(),
    } },

    methods: {
      /**
      * Function to restart the game by resetting the object and variables at initial stage
      * @param    void
      * @return   void  
      */
      newGame(){
        this.gameEnd = false;
        this.activePlayer = this.board.playerX;
        this.gameEndText = '';        
        this.board.boardCells = [
          Array(3).fill(''),
          Array(3).fill(''),
          Array(3).fill('')
        ];        
      },
      /**
      * Function used to get status of game and display the message (winning or draw).
      * @param    void
      * @return   void  
      */
      gameStatusMsg(){
        this.gameEndText = this.board.winningMove(this.activePlayer) ? 'Player '+this.activePlayer+' won!' : 'Game Draw';
      },
      /**
      * Function called on click event on the board cell.
      * Function place the player input on the board cell.
      * @param    {int} x row
      * @param    {int} y column 
      * @return   void  
      */
      handleMove(x, y) {
        //In case game is finished then return without executing further.
        if (this.gameEnd) {
          return;
        }

        //Set player (x or o) on the board cell
        if (this.board.setPlayer(x, y, this.activePlayer) == false) {
           return;
        }

        // Check the game status, if game ends then set the ganme end flag and display the winning or draw messages
        if (this.board.checkGameStatus()) {
          this.gameEnd = true;          
          this.gameStatusMsg();
          return;
        }

        // Assign active Player(x or o)
        if(this.activePlayer == this.board.playerX)
        {
          this.activePlayer = this.board.playerO;
        }else if(this.activePlayer == this.board.playerO)
        {
            this.activePlayer = this.board.playerX;
        }
        
      }     
    }

  }
</script>
<style>
  .clsSubTitle {
    text-align: center;
    width: 320px;
    color: #212121;
  }
  .clsBtnBackground {
    border-color: #0f5f2b;
    background-color: #0f5f2b;
  }

.clsBtn {
    font-size: 1rem;
    padding: 6px 10px;
    border-radius: 2px;
    color: #fff;
    outline: none;
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
  }
  .clsBoardGrid {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    width: 204px;
    height: 204px;
        border: #000 solid 2px;
  }

  .clsGameEndText {
    color: #013e09;
    width: 204px;
    font-size: 18px;
    text-align: center;
    padding-top: 12px;;
  }

  .clsTitle {
    text-align: center;
    width: 320px;
    color: #012840;
  }

  .clsTitle  h1{margin-bottom: 4px; font-size: 23px;}

  .clsSubTitle h3{padding: 0 0 0 0;
    margin: 0 0 13px 0; font-size: 16px;}

</style>
