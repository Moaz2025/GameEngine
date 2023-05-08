// class Stack { 
  
//     // Array is used to implement stack 
//     constructor() 
//     { 
//         this.items = []; 
//     }
//     // push function 
//   push(element) 
//   { 
//   // push element into the list items 
//   this.items.push(element); 
//   } 
//   // pop function 
//   pop() 
//   { 
  
//   if (this.items.length == 0) 
//     return "Underflow"; 
//   return this.items.pop(); 
//   } 
  
//   // isEmpty function 
//   isEmpty() 
//   { 
//   // return true if stack is empty 
//   return this.items.length == 0; 
//   } 
  
//   // peek function 
//   peek() 
//   { 
  
//   return this.items[this.items.length - 1]; 
//   } 
  
// }

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
class eightQueens extends Game{
    constructor(){
        super();
        this.board = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        this.rows = 8;
        this.cols = 8;
        this.name = 'eightQueens';
        this.count = 0;
        this.undoX = new Stack();
        this.undoY = new Stack();
    }
    validateAndInput(userInput){
        if(userInput == "undo"){
            this.undo();
            return true;
        }
        let row = userInput.charAt(0);
        let column = userInput.charAt(1);
        let x = row.charCodeAt(0) - 97;
        let y = column.charCodeAt(0) - 49;
        console.log("Locatain = " + x + "  , " + y);
        //rowIndex = x.char
        //colIndex = y.char
    
        // Check this row on left side
        for(let i = 0; i < y; i++){
            if(this.board[x][i] != ' ')
                return false 
        }
        
        // Check upper diagonal on left side
        for (let i = x, j = y; i >= 0 && j >= 0; i--, j--)
            if (this.board[i][j] == String.fromCharCode(0x265B))
                return false
        
        // Check lower diagonal on left side
        for (let i = x, j = y; j >= 0 && i < 8; i++, j--)
            if (this.board[i][j] == String.fromCharCode(0x265B))
                return false
        
        this.board[x][y] = String.fromCharCode(0x265B)
        this.count++
        this.undoX.push(x);
        this.undoY.push(y);        
        return true
            
    }
    isGameFinished(){
        if(this.count == 8)
        return true
    }
    undo(){
        if(!this.undoX.isEmpty() && !this.undoY.isEmpty()){
            this.board[this.undoX.pop()][this.undoY.pop()] = ' ';
            this.count--;
        }
        console.table(this.board);
    }
}
            

// let game = new eightQueens();
// console.table(game.board);

// game.undo();
// console.table(game.board);

// if(!game.validateAndInput(3,0))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(5,1))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(7,2))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(6,4))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(0,5))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(2,6))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(4,7))
// console.log("Not valid")
// console.table(game.board);

// if(!game.validateAndInput(1,3))
// console.log("Not valid")
// console.table(game.board);

// console.table(game.board);
// if(!game.isGameFinish())
// console.log("Not yet");
// else
// console.log("Finished");

// game.undo();
// console.table(game.board);

// game.undo();
// console.table(game.board);
