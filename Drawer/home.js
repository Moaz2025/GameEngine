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