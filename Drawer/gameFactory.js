class GameFactory{
    constructor(name) {
        console.log("Factory creates " + name);
        if(name=="tic-tac-toe"){
            return new TicTacToe();
        }else if(name == 'sudoku'){
            return new Sudoku();
        }else if(name == 'connect-4'){
            return new connect4();
        }else if(name == '8-queens'){
            return new eightQueens();
        }else if(name == 'checkers'){
            return new Checkers();
        }else if(name == 'chess'){
            return new Chess();
        }
        document.location.reload();
    }
}