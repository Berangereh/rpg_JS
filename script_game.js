class Game {
    constructor(turnLeft = 10) {
      this.turnLeft = turnLeft;
    }
  
    subtractTurn() {
      this.turnLeft -= 1;
    }
  }
  
  function go() { 
    ongoingGame = new Game;
    initializeLobby();
    showcaseFoes();
    document.body.innerHTML = "";
    buttonNewTurn();
    executeRounds();
    ending();
  }
  
  function initializeLobby() {
    lobby = [new Fighter, new Paladin, new Monk, new Berzerker, new Assassin];
  }
  
  function showcaseFoes() {
    console.log(`Et zé partiii ! Voici nos ${lobby.length} combattants :`);
    console.log(lobby);
    console.log("--------------------------------------------");
  }
  
  function buttonNewTurn() {
    // 1. Create the button
    const button = document.createElement("button");
    button.innerHTML = ("Clique ici pour lancer un nouveau tour de jeu !");
  
    // 2. Append somewhere
    document.body.appendChild(button);
  }
  
  function executeRounds() {
    let roundCount = 0;
  
    // Exploit button as an event handler
    const button = document.querySelector("button");
    button.addEventListener("click", function(){
      roundCount++
      console.log(`Tour n°${roundCount}.`);
      console.log("--------------------------------------------");
      ongoingGame.subtractTurn();
      executeTurn();
      console.log(`Il reste ${ongoingGame.turnLeft} tours à jouer.`);
      console.log("--------------------------------------------");
    });
  }
  
  function ending() {
    
  }