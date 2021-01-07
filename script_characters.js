class Character {
    constructor(name, state, hp, dmg, mana) {
      this.name = name;
      this.state = state;
      this.hp = hp;
      this.dmg = dmg;
      this.mana = mana;
    }
  
    takeDamage(hit) {
      this.hp -= hit;
    }
  
    giveDamage(target) {
      target.hp -= this.dmg;
    }
  
    winner() {
      this.state = "winner";
      console.log(`GG à ${this.name}, qui a remporté le jeu 😍`);
    }
  
    loser() {
      this.state = "loser";
      console.log(`Damnnn ! ${this.name} est mort(e) au combat 😬`);
      lobby.splice(foe => foe.name === this.name, 1);
    }
  }
  
  class Fighter extends Character {
    constructor(name = "Grace", state="playing", hp = 12, dmg = 4, mana = 40) {
      super(name, state, hp, dmg, mana);
    }
  
    // Fonction Dark Vision //
    // 5 dégâts //
    // -2 dégâts par coup reçu //
    // 20 mana //
  }
  
  class Paladin extends Character {
    constructor(name = "Ulder", state="playing", hp = 16, dmg = 3, mana = 160) {
      super(name, state, hp, dmg, mana);
    }
  
    // Fonction Healing Lightning //
    // 4 dégâts //
    // 5 soin //
    // 40 mana //
  }
  
  class Monk extends Character {
    constructor(name = "Moana", state="playing", hp = 8, dmg = 2, mana = 200) {
      super(name, state, hp, dmg, mana);
    }
  
    // Fonction Heal //
    // 8 soin //
    // 25 mana //
  }
  
  class Berzerker extends Character {
    constructor(name = "Draven", state="playing", hp = 8, dmg = 4, mana = 0) {
      super(name, state, hp, dmg, mana);
    }
  
    // Fonction Rage //
    // +1 de dmg pour toute la game //
    // -1 hp //
    // 0 mana //
  }
  
  class Assassin extends Character {
    constructor(name = "Carl", state="playing", hp = 6, dmg = 6, mana = 20) {
      super(name, state, hp, dmg, mana);
    }
  
    // Fonction Shadow Hit //
    // 0 dégât prochain tour //
    // dmg de 7 au prochain tour //
    // Si ennemi pas dead, -7 hp //
    // 20 mana //
  }