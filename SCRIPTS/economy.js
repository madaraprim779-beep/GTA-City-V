// GTA City IV
// Gestion de l'économie du jeu

const Economy = {
  playerMoney: 500,

  businesses: [
    "Garage",
    "Restaurant",
    "Entreprise de transport",
    "Magasin"
  ],

  properties: [],

  earnMoney(amount) {
    this.playerMoney += amount;
    console.log("Argent gagné : " + amount);
  },

  spendMoney(amount) {
    this.playerMoney -= amount;
    console.log("Argent dépensé : " + amount);
  },

  buyBusiness(name) {
    this.businesses.push(name);
    console.log("Entreprise achetée : " + name);
  }
};

export default Economy;