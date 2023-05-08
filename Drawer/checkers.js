class Checkers extends Game{
    constructor(){
        super();
        this.black = String.fromCharCode(0x26AB);
        this.red = String.fromCharCode(0x2B55);
        this.rows = 8;
        this.cols = 8;
        this.name = 'Checkers';
        this.player1 = "Black";
        this.player2 = "Red";
        this.turn = this.player1;
        this.isFinished = false;
        this.board = [
            [' ', this.black, ' ', this.black, ' ', this.black, ' ', this.black],
            [this.black, ' ', this.black, ' ', this.black, ' ', this.black, ' '],
            [' ', this.black, ' ', this.black, ' ', this.black, ' ', this.black],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [this.red, ' ', this.red, ' ', this.red, ' ', this.red, ' '],
            [' ', this.red, ' ', this.red, ' ', this.red, ' ', this.red],
            [this.red, ' ', this.red, ' ', this.red, ' ', this.red, ' ']
        ];
    }
    positionOnBoard(x,y){
        if(x<0 || x>= this.rows){
            return false;
        }
        if(y<0 || y>= this.cols){
            return false;
        }
        return true;
    }
    validateAndInput(userInput){
        let startX = userInput.charAt(0).charCodeAt(0)-97;
        let startY = userInput.charAt(1).charCodeAt(0)-49;
        let endX = userInput.charAt(3).charCodeAt(0)-97;
        let endY = userInput.charAt(4).charCodeAt(0)-49;
        console.log(startX,startY,endX,endY);
        if(startX < 0 || startX >= this.rows || startY < 0 || startY >= this.cols){
            return false;
        }
        if(endX < 0 || endX >= this.rows || endY < 0 || endY >= this.cols){
            return false;
        }
        if(this.board[startX][startY] == " "){
            return false;
        }
        if(this.board[startX][startY] == this.black && this.turn == this.player2){
            return false;
        }
        if(this.board[startX][startY] == this.red && this.turn == this.player1){
            return false;
        }
        if(this.board[endX][endY] != " "){
            return false;
        }
        if(Math.abs(startY-endY) == 1){
            if((endX-startX == 1 && this.turn == this.player1) || (endX-startX == -1 && this.turn == this.player2)){
                this.board[endX][endY] = this.board[startX][startY];
                this.board[startX][startY] = ' ';
                if(this.turn == this.player1){
                    this.turn = this.player2;
                }else{
                    this.turn = this.player1;
                }
                return true;
            }
        }
        if(Math.abs(startX-endX) == 2 && Math.abs(startY-endY) == 2){
            if(this.board[(startX+endX)/2][(startY+endY)/2] == " "){
                return false;
            }else if(this.board[(startX+endX)/2][(startY+endY)/2] == this.black && this.turn == this.player1){
                return false;
            }else if(this.board[(startX+endX)/2][(startY+endY)/2] == this.red && this.turn == this.player2){
                return false;
            }
            this.board[endX][endY] = this.board[startX][startY];
            this.board[startX][startY] = ' ';
            this.board[(startX+endX)/2][(startY+endY)/2] = " ";
            if(this.turn == this.player1){
                this.turn = this.player2;
            }else{
                this.turn = this.player1;
            }
            return true;
        }
        return false;
    }
    isGameFinished(){
        let redExist = false;
        let blackExist = false;
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[0].length; j++) {
                if(this.board[i][j] == this.black){
                    blackExist = true;
                }
                if(this.board[i][j] == this.red){
                    redExist = true;
                }
            }
        }
        if(blackExist && redExist){
            return false;
        }
        return true;
    }
}