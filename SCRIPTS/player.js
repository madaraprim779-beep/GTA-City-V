// GTA City IV
// Gestion du personnage principal

const Player = {
  name: "Alex Carter",

  position: {
    city: "Nova Santos",
    x: 0,
    y: 0
  },

  stats: {
    health: 100,
    stamina: 100,
    money: 500
  },

  inventory: [],

  walk() {
    console.log("Le joueur marche dans la ville");
  },

  enterVehicle(vehicle) {
    console.log("Le joueur entre dans " + vehicle);
  },

  addMoney(amount) {
    this.stats.money += amount;
  }
};

export default Player;