class Chess extends Game{
    constructor(){
        super();
        this.blackKing = String.fromCharCode(0x265A);
        this.blackQueen = String.fromCharCode(0x265B);
        this.blackRook = String.fromCharCode(0x265C);
        this.blackBishop = String.fromCharCode(0x265D);
        this.blackKnight = String.fromCharCode(0x265E);
        this.blackPawn = String.fromCharCode(0x265F);
        this.whiteKing = String.fromCharCode(0x2654);
        this.whiteQueen = String.fromCharCode(0x2655);
        this.whiteRook = String.fromCharCode(0x2656);
        this.whiteBishop = String.fromCharCode(0x2657);
        this.whiteKnight = String.fromCharCode(0x2658);
        this.whitePawn = String.fromCharCode(0x2659);
        this.black = [this.blackKing, this.blackQueen, this.blackRook, this.blackBishop, this.blackKnight, this.blackPawn];
        this.white = [this.whiteKing, this.whiteQueen, this.whiteRook, this.whiteBishop, this.whiteKnight, this.whitePawn];
        this.rows = 8;
        this.cols = 8;
        this.name = 'Chess';
        this.player1 = "white";
        this.player2 = "black";
        this.turn = this.player1;
        this.isFinished = false;
        this.board = [
            [this.blackRook, this.blackKnight, this.blackBishop, this.blackQueen, this.blackKing, this.blackBishop, this.blackKnight, this.blackRook],
            [this.blackPawn, this.blackPawn, this.blackPawn, this.blackPawn, this.blackPawn, this.blackPawn, this.blackPawn, this.blackPawn],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [this.whitePawn, this.whitePawn, this.whitePawn, this.whitePawn, this.whitePawn, this.whitePawn, this.whitePawn, this.whitePawn],
            [this.whiteRook, this.whiteKnight, this.whiteBishop, this.whiteQueen, this.whiteKing, this.whiteBishop, this.whiteKnight, this.whiteRook]
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
    changeTurn(){
        if(this.turn == this.player1){
            this.turn = this.player2;
        }else{
            this.turn = this.player1;
        }
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
        if(startX==endX && startY==endY){
            return false;
        }
        if(this.board[startX][startY] == " "){
            return false;
        }
        if(this.white.includes(this.board[startX][startY]) && this.turn == this.player2){
            return false;
        }
        if(this.black.includes(this.board[startX][startY]) && this.turn == this.player1){
            return false;
        }
        if(this.board[startX][startY]==this.blackKing || this.board[startX][startY]==this.whiteKing){
            if(this.isValidKingMove(startX,startY,endX,endY)){
                this.board[endX][endY] = this.board[startX][startY];
                this.board[startX][startY] = " ";
                this.changeTurn();
                return true;
            }
        }
        if(this.board[startX][startY]==this.blackQueen || this.board[startX][startY]==this.whiteQueen){
            if(this.isValidQueenMove(startX,startY,endX,endY)){
                this.board[endX][endY] = this.board[startX][startY];
                this.board[startX][startY] = " ";
                this.changeTurn();
                return true;
            }
        }
        if(this.board[startX][startY]==this.blackKnight || this.board[startX][startY]==this.whiteKnight){
            if(this.isValidKnightMove(startX,startY,endX,endY)){
                this.board[endX][endY] = this.board[startX][startY];
                this.board[startX][startY] = " ";
                this.changeTurn();
                return true;
            }
        }
        if(this.board[startX][startY]==this.blackBishop || this.board[startX][startY]==this.whiteBishop){
            if(this.isValidBishopMove(startX,startY,endX,endY)){
                this.board[endX][endY] = this.board[startX][startY];
                this.board[startX][startY] = " ";
                this.changeTurn();
                return true;
            }
        }
        if(this.board[startX][startY]==this.blackRook || this.board[startX][startY]==this.whiteRook){
            if(this.isValidRookMove(startX,startY,endX,endY)){
                this.board[endX][endY] = this.board[startX][startY];
                this.board[startX][startY] = " ";
                this.changeTurn();
                return true;
            }
        }
        if(this.board[startX][startY]==this.blackPawn || this.board[startX][startY]==this.whitePawn){
            if(this.isValidPawnMove(startX,startY,endX,endY)){
                this.board[endX][endY] = this.board[startX][startY];
                this.board[startX][startY] = " ";
                this.changeTurn();
                return true;
            }
        }
    }
    isValidKingMove(x1,y1,x2,y2){
        if(Math.abs(x1-x2)>1 || Math.abs(y1-y2)>1){
            return false;
        }
        if(this.board[x2][y2] == " "){
            return true;
        }
        if(this.board[x1][y1] == this.blackKing){
            if(this.white.includes(this.board[x2][y2])){
                return true;
            }
        }
        if(this.board[x1][y1] == this.whiteKing){
            if(this.black.includes(this.board[x2][y2])){
                return true;
            }
        }
        return false;
    }
    isValidQueenMove(x1,y1,x2,y2){
        if(x1==x2 || y1==y2 || (Math.abs(x1-x2) == Math.abs(y1-y2))){
            if(this.board[x2][y2] == " "){
                return true;
            }
            if(this.board[x1][y1] == this.blackQueen){
                if(this.white.includes(this.board[x2][y2])){
                    return true;
                }
            }
            if(this.board[x1][y1] == this.whiteQueen){
                if(this.black.includes(this.board[x2][y2])){
                    return true;
                }
            }
        }
        return false;
    }
    isValidKnightMove(x1,y1,x2,y2){
        if((Math.abs(x1-x2)==1 && Math.abs(y1-y2)==2) || (Math.abs(x1-x2)==2 && Math.abs(y1-y2)==1)){
            if(this.board[x2][y2] == " "){
                return true;
            }
            if(this.board[x1][y1] == this.blackKnight){
                if(this.white.includes(this.board[x2][y2])){
                    return true;
                }
            }
            if(this.board[x1][y1] == this.whiteKnight){
                if(this.black.includes(this.board[x2][y2])){
                    return true;
                }
            }
        }
        return false;
    }
    isValidBishopMove(x1,y1,x2,y2){
        if(Math.abs(x1-x2) == Math.abs(y1-y2)){
            if(this.board[x2][y2] == " "){
                return true;
            }
            if(this.board[x1][y1] == this.blackBishop){
                if(this.white.includes(this.board[x2][y2])){
                    return true;
                }
            }
            if(this.board[x1][y1] == this.whiteBishop){
                if(this.black.includes(this.board[x2][y2])){
                    return true;
                }
            }
        }
        return false;
    }
    isValidRookMove(x1,y1,x2,y2){
        if(x1==x2 || y1==y2){
            if(this.board[x2][y2] == " "){
                return true;
            }
            if(this.board[x1][y1] == this.blackRook){
                if(this.white.includes(this.board[x2][y2])){
                    return true;
                }
            }
            if(this.board[x1][y1] == this.whiteRook){
                if(this.black.includes(this.board[x2][y2])){
                    return true;
                }
            }
        }
        return false;
    }
    isValidPawnMove(x1,y1,x2,y2){
        if(this.board[x1][y1] == this.blackPawn){
            if(x2-x1 == 1){
                if(y1==y2 && this.board[x2][y2] == " "){
                    return true;
                }
                if(Math.abs(y1-y2)==1 &&this.white.includes(this.board[x2][y2])){
                    return true;
                }
            }
        }
        if(this.board[x1][y1] == this.whitePawn){
            if(x2-x1 == -1){
                if(y1==y2 && this.board[x2][y2] == " "){
                    return true;
                }
                if(Math.abs(y1-y2)==1 &&this.black.includes(this.board[x2][y2])){
                    return true;
                }
            }
        }
        return false;
    }
    isGameFinished(){
        return this.isFinished;
    }
}