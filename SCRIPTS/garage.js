// GTA City IV
// Gestion des garages et véhicules

const Garage = {
  garages: [
    {
      name: "Garage Central",
      city: "Nova Santos",
      services: [
        "Réparation",
        "Peinture",
        "Amélioration moteur",
        "Personnalisation"
      ]
    },

    {
      name: "Garage Desert King",
      city: "Silver Vegas",
      services: [
        "Tuning course",
        "Préparation sportive",
        "Stockage véhicules rares"
      ]
    },

    {
      name: "Bay Custom",
      city: "Bay City",
      services: [
        "Modification carrosserie",
        "Amélioration performance"
      ]
    }
  ],

  rareVehicles: [
    "Supercar secrète",
    "Voiture de course unique",
    "Véhicule de luxe caché"
  ],

  repair(vehicle) {
    console.log(vehicle + " réparé");
  },

  upgrade(vehicle, part) {
    console.log(vehicle + " amélioré avec " + part);
  }
};

export default Garage;