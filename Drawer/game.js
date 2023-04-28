class Game{
    // constructor(games){
    //     console.log(games)
    //     this.games = games;
    //     this.chosenGame = null;
    // }
    constructor() {
        this.gameView = document.getElementById("game");
    }
    drawGame(){
        
        this.gameView.style.display = "initial";
        // for (let index = 0; index < games.length; index++) {
        //     const button = document.createElement("button");
        //     const inputValue = games[index];
        //     const t = document.createTextNode(inputValue);
        //     button.appendChild(t);
        //     button.addEventListener("click", ()=>{
        //         console.log(button.textContent);
        //         this.chosenGame = button.textContent;
        //     });
        //     document.getElementById("games").appendChild(button);
        // }
    }
    removeGame(){
        this.gameView.style.display = "none";
        console.log("Remove " + this.gameView.style.display);       
        // let home = document.getElementById("home");
        // home.style.display = "none";
    }
}