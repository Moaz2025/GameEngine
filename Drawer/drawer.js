let games = ['chess', 'tic-tac-toe', 'checkers', 'sudoku', 'connect-4', '8-queens'];
let gameView = document.getElementById("game");
let homeView = document.getElementById("home");
let gameSelection = document.getElementById("games");
var chosenGame = "";
class Home{
    constructor(games, homeView){
        this.chosenGame = "";
        this.games = games;
        this.homeView = homeView;
    }
    drawHome(){
        for (let index = 0; index < games.length; index++) {
            const button = document.createElement("button");
            const li = document.createElement("li");
            const inputValue = games[index];
            const t = document.createTextNode(inputValue);
            button.appendChild(t);
            // button.addEventListener("click", ()=>{
            //     console.log("click: " + button.textContent);
            //     chosenGame = button.textContent;
            //     selectGame(chosenGame);
            // });
            li.appendChild(button);
            gameSelection.appendChild(li);
        }
    }
    displayHome(){
        homeView.style.display = "initial";
    }
    removeHome(){
        homeView.style.display = "none";
    }
}
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
class Drawer{
    drawGame(game){
        let gameView = document.getElementById("game");
        while (gameView.hasChildNodes()) {
            gameView.removeChild(gameView.firstChild);
        }
        gameView.style.display = "initial";
        var charIndex = 97;
        for (let i = 0; i < game.rows; i++) {
            const row = document.createElement("ul");
            row.className = "row";
            const indexButton = document.createElement("button");
            const inputValue = String.fromCharCode(charIndex);
            const t = document.createTextNode(inputValue);
            indexButton.appendChild(t);
            indexButton.className = "circle";
            charIndex++;
            row.appendChild(indexButton);
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
    }
}
class DrawerFactory{
    constructor(name) {
        if(name=="tic-tac-toe"){
            return new Drawer();
        }else if(name == 'sudoku'){
            return new Drawer();
        }else if(name == 'connect-4'){
            return new Drawer();
        }
        return new TwoColorsDrawer();
    }
}
function removeGame(){
    gameView.style.display = "none";
    const options = document.getElementById("gameOptions");
    options.style.display = "none"
}
class TwoColorsDrawer extends Drawer{
    drawGame(game){
        let gameView = document.getElementById("game");
        while (gameView.hasChildNodes()) {
            gameView.removeChild(gameView.firstChild);
        }
        // let options = document.getElementById("gameOptions");
        // options.style.display = "initial";
        gameView.style.display = "initial";
        var charIndex = 97;
        for (let i = 0; i < game.rows; i++) {
            const row = document.createElement("ul");
            row.className = "row";
            const indexButton = document.createElement("button");
            const inputValue = String.fromCharCode(charIndex);
            const t = document.createTextNode(inputValue);
            indexButton.appendChild(t);
            indexButton.className = "circle";
            charIndex++;
            row.appendChild(indexButton);
            for (let j = 0; j < game.cols; j++){
                const button = document.createElement("button");
                const inputValue = game.board[i][j];
                const t = document.createTextNode(inputValue);
                button.appendChild(t);
                // button.style.background = game.board[i][j].color;
                if ((i + j) % 2 === 1) {
                    button.className = "cell"
                }else {
                    button.className = "alternativeCell"
                }
                row.appendChild(button);
            }
            gameView.appendChild(row);
        }
    }
}
let drawer = new Drawer();
function selectGame(gameChosen){
    game = new GameFactory(gameChosen);
    drawer = new DrawerFactory(gameChosen);
    drawer.drawGame(game);
    home.removeHome();
}
function submitInput(userInput){
    console.log(userInput);
    if(!userInput){
        alert("Wrong input, try again");
        console.log("Wrong input"); 
        setTimeout(gameLoop,500);
        return;
    }
    if(game.isGameFinished()){
        window.alert("Game has finished");
        return;
    }
    const validation = game.validateAndInput(userInput);
    console.log(validation);
    if(validation){
        drawer.drawGame(game);
    }else{
        alert("Wrong input, try again");
        console.log("Wrong input"); 
    }
    setTimeout(gameLoop,500);
}
let home = new Home(games);
home.drawHome();
removeGame();
setTimeout(()=>{
    chosenGame = prompt("Please enter the game: ");
    console.log("click: " + chosenGame);
    game = new GameFactory(chosenGame);
    console.log(game);
    drawer = new DrawerFactory(chosenGame);
    drawer.drawGame(game);
    home.removeHome();
    setTimeout(gameLoop,750);
},100);
function gameLoop(){
    if(!game.isGameFinished()){
        var inputPlaceHolder = "";
        if(game.turn){
            inputPlaceHolder = "Player " + game.turn.toString();
        }else{
            inputPlaceHolder = "Player";
        }
        var userInput = prompt(inputPlaceHolder);
        console.log(userInput);
        if(userInput == "exit" || userInput == null){
            document.location.reload();
        }else{
            submitInput(userInput);
        }  
    }else{
        alert("Game has finished press ok to reload!");
        document.location.reload();
    }
}