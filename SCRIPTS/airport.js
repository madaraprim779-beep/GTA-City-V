// GTA City IV
// Gestion des aéroports et des véhicules aériens

const Airport = {
  airports: [
    {
      name: "Nova International Airport",
      city: "Nova Santos",
      services: [
        "Vols entre les villes",
        "Location d'avions",
        "Hangars privés"
      ]
    },

    {
      name: "Silver Desert Airport",
      city: "Silver Vegas",
      services: [
        "Avions privés",
        "Hélicoptères",
        "Missions aériennes"
      ]
    },

    {
      name: "Bay Coast Airport",
      city: "Bay City",
      services: [
        "Petits avions",
        "École de pilotage",
        "Hangars secrets"
      ]
    }
  ],

  aircrafts: [
    "Avion de ligne",
    "Jet privé",
    "Hélicoptère",
    "Avion de sport"
  ],

  fly(destination) {
    console.log("Vol vers : " + destination);
  },

  spawnAircraft(type) {
    console.log("Apparition de : " + type);
  }
};

export default Airport;