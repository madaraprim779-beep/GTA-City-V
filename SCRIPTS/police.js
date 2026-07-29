// GTA City IV
// Gestion de la police et des poursuites

const Police = {
  wantedLevel: 0,

  units: [
    "Police de quartier",
    "Patrouille rapide",
    "Brigade spéciale",
    "Unité tactique"
  ],

  vehicles: [
    "Voiture de police",
    "Moto de police",
    "Hélicoptère de surveillance",
    "Véhicule blindé"
  ],

  increaseWanted(level) {
    this.wantedLevel += level;
    console.log("Niveau de recherche : " + this.wantedLevel);
  },

  decreaseWanted() {
    if (this.wantedLevel > 0) {
      this.wantedLevel--;
    }
  },

  chasePlayer() {
    console.log("La police poursuit le joueur");
  },

  sendUnit(unit) {
    console.log("Unité envoyée : " + unit);
  }
};

export default Police;