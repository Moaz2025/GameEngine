class Stack { 
  
  // Array is used to implement stack 
  constructor() 
  { 
      this.items = []; 
  }
  // push function 
push(element) 
{ 
// push element into the list items 
this.items.push(element); 
} 
// pop function 
pop() 
{ 

if (this.items.length == 0) 
  return "Underflow"; 
return this.items.pop(); 
} 

// isEmpty function 
isEmpty() 
{ 
// return true if stack is empty 
return this.items.length == 0; 
} 

// peek function 
peek() 
{ 

return this.items[this.items.length - 1]; 
} 

}

function generateSudoku() {
  // Initialize a blank 9x9 grid
  var grid = Array.from(Array(9), () => new Array(9).fill(0));

  // Fill in the diagonal 3x3 grids with random numbers
  for (var i = 0; i < 9; i += 3) {
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var j = i; j < i + 3; j++) {
      for (var k = i; k < i + 3; k++) {
        var index = Math.floor(Math.random() * values.length);
        var value = values[index];
        values.splice(index, 1);
        grid[j][k] = value;
      }
    }
  }

  /*var numToRemove = 10;
  while (numToRemove > 0) {
    var row = Math.floor(Math.random() * 9);
    var col = Math.floor(Math.random() * 9);
    if (grid[row][col] !== 0) {
      grid[row][col] = 0;
      numToRemove--;
    }
  }*/

  
  var grid2 = Array.from(Array(9), () => new Array(9).fill(' '));
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(grid[i][j] == 0)
      grid2[i][j] = ' ';
      else
      grid2[i][j] = grid[i][j].toString();
    }
  }

  // Return the completed grid
  return grid2;
}

// class Game{
//     constructor(){}
//     rows;
//     cols;
//     name;
    
// }
// class GameFactory{
//     constructor(name) {
//         this.board = [];
//     }
// }
class Sudoku extends Game{
    constructor(){
        super();
        /*this.board = [
            ['2', ' ', ' ', ' ', '5', ' ', ' ', ' ', ' '],
            ['6', '7', ' ', ' ', ' ', ' ', '9', '2', ' '],
            [' ', '4', ' ', '7', ' ', ' ', '8', ' ', '1'],
            ['7', ' ', '4', '9', ' ', '2', '3', '6', '8'],
            ['3', ' ', '1', '5', '8', '7', '2', '4', ' '],
            ['8', ' ', '9', ' ', '6', ' ', ' ', ' ', ' '],
            ['4', ' ', ' ', '2', ' ', '1', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', '4', '5', '6', ' ', '2'],
            [' ', '8', ' ', ' ', ' ', ' ', ' ', '1', ' ']
        ];*/
        this.board = generateSudoku();
        this.rows = 9;
        this.cols = 9;
        this.name = 'Sudoku';
        this.count = 27;
        this.undoX = new Stack();
        this.undoY = new Stack();
    }
    validateAndInput(inputValue){
      if(inputValue == "undo"){
        this.undo();
        return true;
      }
      let x = inputValue.charAt(0).charCodeAt(0)-97;
      let y = inputValue.charAt(1).charCodeAt(0)-49;
      let input = inputValue.charAt(3).charCodeAt(0)-48;
      console.log(x,y,input);
      //rowIndex = x.char
      //colIndex = y.char

      if(this.board[x][y] != ' ')
      return false
      else{
          for(let i = 0; i < 9; i++){
              if(this.board[x][i] == input || this.board[i][y] == input)
              return false
          }
      let row_offset = Math.floor(x / 3) * 3;
      let col_offset = Math.floor(y / 3) * 3;
      for ( let i = 0 + row_offset; i <= 2 + row_offset; i++ ) {
          for ( let j = 0 + col_offset; j <= 2 + col_offset; j++ ) {
              if (input == this.board[i][j] ) {
              return false;
              }
          }
      }
      this.board[x][y] = input.toString();
      this.count++;
      this.undoX.push(x);
      this.undoY.push(y);
      return true;
      }
    }

    isGameFinished(){
      if(this.count == 81)
      return true
    }

    undo(){
      if(!this.undoX.isEmpty() && !this.undoY.isEmpty()){
        this.board[this.undoX.pop()][this.undoY.pop()] = ' ';
        this.count--;
      }
    }
}


// let game = new Sudoku();
// console.table(game.board);

// game.undo();
// console.table(game.board);

// if(!game.validateAndInput(0,3,2))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(5,8,5))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(8,3,7))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(7,4,2))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(8,0,5))
// console.log("Not valid")
// console.table(game.board);

// game.undo();
// console.table(game.board);

// game.undo();
// console.table(game.board);

// if(!game.isGameFinish())
// console.log("Not yet");