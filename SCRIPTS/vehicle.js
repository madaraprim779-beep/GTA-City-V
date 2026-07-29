// GTA City IV
// Gestion des véhicules

const Vehicle = {
  name: "Sport Car",

  type: "car",

  speed: 200,

  fuel: 100,

  rarity: "normal",

  location: "Nova Santos",

  startEngine() {
    console.log("Moteur démarré");
  },

  drive() {
    console.log("Le véhicule roule dans la ville");
  },

  upgrade(part) {
    console.log("Amélioration installée : " + part);
  }
};

export default Vehicle;