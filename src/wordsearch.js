export default {

  findWord: function(word, row) {
    const joinedLetters = row.join('')
    const reversedWord = word.split('').reverse().join('')

    return joinedLetters.includes(word) || joinedLetters.includes(reversedWord)
  },

  horizontal: function(board, word) {
    for (let i = 0; i < board.length; i++) {
      if(this.findWord(word, board[i])) {
        return true
      }
    }
    return false
  },

  vertical: function(board, word) {
    for(let y =0; y<board.length; y++){
      let newArray = []
      for(let x = 0; x<board[y].length; x++){
        newArray.push(board[x][y])
      }
      if(this.findWord(word, newArray)) {
        return true
      }
    }
  },
  diagonal: function(board,word){
    for(let y =0; y<board.length; y++){
      let newArray = []
      for(let x = 0; x<board[y].length; x++){
        newArray.push(board[x][y+x])
      }
      if(this.findWord(word, newArray)) {
        return true
      }
    }

  },
  

  hasWord: function(board, word) {
    return this.horizontal(board, word) || this.vertical(board, word) || this.diagonal(board, word)
  }
}
