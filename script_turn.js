class Turn {
    constructor(currentPlayer, target) {
      this.currentPlayer = currentPlayer;
      this.target = target;
    }
  }
  
  function executeTurn() {
  
    const currentPlayer = lobby[0];
    const target = lobby[1];
  
    ongoingTurn = new Turn(currentPlayer, target);
  
    console.log(`${currentPlayer.name} va commencer à jouer !`);
    playerMove(currentPlayer, target);
  
    updatePlayerStates(currentPlayer, target);
  }
  
  function playerMove(currentPlayer, target) {
    currentPlayer.giveDamage(target);
    target.giveDamage(currentPlayer);
    console.log(`${currentPlayer.name} attaque ${target.name} !`)
    console.log(`${target.name} attaque ${currentPlayer.name} !`)

    console.log(`${target.name} a maintenant ${target.hp} points de vie.`)
    console.log(`${currentPlayer.name} a maintenant ${currentPlayer.hp} points de vie.`)

  }
  
  function updatePlayerStates(currentPlayer, target) {
    if (target.hp <= 0) {
      target.loser();
      currentPlayer.winner();
    }    
    else if (currentPlayer.hp <= 0) 
        currentPlayer.loser();
        target.winner();
      
  };