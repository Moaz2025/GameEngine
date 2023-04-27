const prompt = require ("prompt-sync")({sigint: true})
class Home{
    games = ['chess', 'tic-tac-toe', 'checkers', 'sudoku', 'connect-4', '8-queens'];
    constructor(){
        console.log(`Choose from the following games (ex: input "1" for ${this.games[0]})`);
        console.log(this.games);
        let gameIndex = prompt('');
        while(gameIndex<1 || gameIndex>this.games.length){
            gameIndex = prompt('Wrong Input! try again: ');
        }
        this.game = this.games[gameIndex-1];
    }
    getGame(){
        return this.game;
    }
}
module.exports = {Home};