let games = ['chess', 'tic-tac-toe', 'checkers', 'sudoku', 'connect-4', '8-queens'];
let gameView = document.getElementById("game");
let homeView = document.getElementById("home");
let gameSelection = document.getElementById("games");
let chosenGame = "";
// function addListenersToHomeElement(element){
//     element.addEventListener("click", ()=>{
//         console.log("click: " + element.textContent);
//         chosenGame = element.textContent;

//     });
// }
class Home{
    constructor(games, homeView){
        this.chosenGame = "";
        this.games = games;
        this.homeView = homeView;
    }
    drawHome(){
        for (let index = 0; index < this.games.length; index++) {
            const button = document.createElement("button");
            const li = document.createElement("li");
            const inputValue = games[index];
            const t = document.createTextNode(inputValue);
            button.appendChild(t);
            button.addEventListener("click", ()=>{
                console.log("click: " + button.textContent);
                chosenGame = button.textContent;
                selectGame(chosenGame);
            });
            li.appendChild(button);
            gameSelection.appendChild(li);
        }
    }
    removeHome(){
        homeView.style.display = "none";
    }
}
class Cell{
    color="white";
    asci;
    shape="square";
}
class Game{
    constructor(){}
    rows;
    cols;
    name;
}
class GameFactory{
    constructor(name) {
        this.board = [];
    }
}
class TicTacToe extends Game{
    constructor(){
        super();
        this.board = [
            [' ', 'X', ' '],
            [' ', ' ', String.fromCharCode(0xDD34)],
            [' ', String.fromCharCode(0x2654), String.fromCharCode(0x2657)],
        ];
        this.rows = 3;
        this.cols = 3;
        this.name = 'Tic Tac Toe';
    }
    validateAndInput(x, y){
            rowIndex = x.char
    }
}
let home = new Home(games);
home.drawHome();
removeGame();
let game = new TicTacToe();
function removeGame(){
    gameView.style.display = "none";
    const options = document.getElementById("gameOptions");
    options.style.display = "none"
    console.log("Remove " + gameView.style.display); 
}
function drawGame(){
    gameView.style.display = "initial";
    for (let i = 0; i < game.rows; i++) {
        const row = document.createElement("ul");
        row.className = "row";
        for (let j = 0; j < game.cols; j++){
            const button = document.createElement("button");
            const inputValue = game.board[i][j];
            const t = document.createTextNode(inputValue);
            button.appendChild(t);
            button.className = "cell";
            row.appendChild(button);
        }
        gameView.appendChild(row);
    }
    console.log(gameView);
}
function selectGame(game){
    console.log("Select: ");
    console.log(game);
    drawGame();
    home.removeHome();
}
// selectGame(game);
// home = new Home(games);
// game = new Game();
// removeGame();
// drawHome();
// drawGame();
