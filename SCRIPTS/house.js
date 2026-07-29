// GTA City IV
// Gestion des maisons et propriétés

const House = {
  properties: [
    {
      name: "Villa Ocean",
      city: "Bay City",
      type: "Villa de luxe",
      price: 500000
    },

    {
      name: "Appartement Central",
      city: "Nova Santos",
      type: "Appartement",
      price: 150000
    },

    {
      name: "Maison du désert",
      city: "Silver Vegas",
      type: "Maison privée",
      price: 250000
    }
  ],

  playerHouses: [],

  buyHouse(house) {
    this.playerHouses.push(house);
    console.log("Maison achetée : " + house);
  },

  enterHouse(house) {
    console.log("Entrée dans : " + house);
  },

  saveGame() {
    console.log("Partie sauvegardée dans la propriété");
  }
};

export default House;