class Home{
    constructor(games){
        console.log(games)
        this.games = games;
        this.chosenGame = null;
        this.homeView = document.getElementById("home");
        this.gameSelection = document.getElementById("games");
    }
    drawHome(){
        for (let index = 0; index < games.length; index++) {
            const button = document.createElement("button");
            const inputValue = games[index];
            const t = document.createTextNode(inputValue);
            button.appendChild(t);
            this.gameSelection.appendChild(button);
            // const li = document.createElement("li");
            // const inputValue = games[index];
            // const t = document.createTextNode(inputValue);
            // const link = document.createElement("a");
            // link.appendChild(t);
            // link.setAttribute("href", "dddd.html")
            // li.appendChild(link);
            // // button.addEventListener("click", ()=>{
            // //     console.log(button.textContent);
            // //     this.chosenGame = button.textContent;
            // // });
            // document.getElementById("games").appendChild(li);
        }
    }
    removeHome(){
        this.homeView.style.display = "none";
    }
}