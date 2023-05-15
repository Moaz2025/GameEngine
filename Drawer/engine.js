var games = ['chess', 'tic-tac-toe', 'checkers', 'sudoku', 'connect-4', '8-queens'];
var gameView = document.getElementById("game");
var homeView = document.getElementById("home");
var gameSelection = document.getElementById("games");
var chosenGame = "";
function removeGame(){
    gameView.style.display = "none";
    const options = document.getElementById("gameOptions");
    options.style.display = "none"
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
        drawer.drawGame(game, gameView);
    }else{
        alert("Wrong input, try again");
        console.log("Wrong input"); 
    }
    setTimeout(gameLoop,500);
}

let home = new Home(games, homeView);
home.drawHome();
removeGame();
setTimeout(()=>{
    chosenGame = prompt("Please enter the game: ");
    console.log("click: " + chosenGame);
    game = new GameFactory(chosenGame);
    console.log(game);
    drawer = new DrawerFactory(chosenGame);
    drawer.drawGame(game, gameView);
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