class TicTacToe extends Game{
    constructor(){
        super();
        this.rows = 3;
        this.cols = 3;
        this.name = 'Tic Tac Toe';
        this.player1 = "x";
        this.player2 = "o";
        this.turn = this.player1;
        this.isFinished = false;
        this.board = [];
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.cols; j++) {
                row.push(" ");
            }
            this.board.push(row);
        }
    }
    validateAndInput(userInput){
        const row = userInput.charAt(0);
        const column = userInput.charAt(1);
        const rowIndex = row.charCodeAt(0) - 97;
        const columnIndex = column.charCodeAt(0) - 49;
        console.log("Locatain = " + rowIndex + "  , " + columnIndex);
        if(rowIndex < 0 || rowIndex >= this.rows || columnIndex < 0 || columnIndex >= this.cols){
            return false;
        }
        if(this.board[rowIndex][columnIndex] != " "){
            return false;
        }
        this.board[rowIndex][columnIndex] = this.turn;
        if(this.turn == this.player1){
            this.turn = this.player2;
        }else{
            this.turn = this.player1;
        }
        this.updateIsFinished();
        return true;
    }
    updateIsFinished(){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                if(this.board[i][j] == " "){
                    this.isFinished = false;
                    return;
                }
            }
        }
        this.isFinished = true;
    }
    isGameFinished(){
        return this.isFinished;
    }
}