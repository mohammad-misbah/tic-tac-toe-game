<template>
    <div @click="$emit('click')" class="clsBoardCell">
      <span
        v-if="value !== ''" :class="{ 'clsXplayer' : value === this.board.playerX, 'clsOplayer': value === this.board.playerO }"
      >
        {{ value }}
      </span>
    </div>
</template>

<script>
  import Board from "../Board";
  export default {
    data() { return {
      board: new Board(),
    } },
    //Receive data (x or o) from parent component board
    props: {
      value: String,
    },
  }
</script>
<style>


  .clsBoardCell {
    width: 64px;
    height: 64px;
    border: 2px solid #060606;
    font-size: 42px;
    background-color: hsl(12, 45%, 98%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .clsXplayer {
    color:#0c6102;
  }
  .clsOplayer {
    color: #ff4701;
  }

  .clsXplayer,.clsOplayer {
    position: relative;
    top: -6px;
    font-weight: bold;
    font-size: 48px;
  }
</style>
