class connect4 extends Game{
    constructor(){
        super();
        this.board = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        this.rows = 6;
        this.cols = 7;
        this.name = 'connect-4';
        this.count = 0;
        this.playerOneTurn = true;
    }
    validateAndInput(y){
        y--;
        //rowIndex = x.char
        //colIndex = y.char
        for(let i = 5; i >= 0; i--){
            if(this.board[i][y] == ' ' && this.playerOneTurn){
                this.board[i][y] = String.fromCharCode(0x2B55)
                this.count++;
                this.playerOneTurn = !this.playerOneTurn;
                return true
            }
            else if(this.board[i][y] == ' ' && !this.playerOneTurn){
                this.board[i][y] = String.fromCharCode(0x26AB)
                this.count++
                this.playerOneTurn = !this.playerOneTurn;
                return true
            } 
        }
        return false 
    }

    isGameFinished(){
        if(this.count == 42)
        return true
    }
}