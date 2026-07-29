// GTA City IV
// Gestion de la base militaire

const Military = {
  base: {
    name: "Fort Shadow",
    location: "Entre Silver Vegas et la campagne"
  },

  units: [
    "Soldat",
    "Officier",
    "Pilote militaire",
    "Unité spéciale"
  ],

  vehicles: [
    "Jeep militaire",
    "Camion blindé",
    "Hélicoptère militaire",
    "Avion militaire"
  ],

  security: {
    restrictedArea: true,
    cameras: true,
    guards: true
  },

  enterBase() {
    console.log("Entrée dans la base militaire");
  },

  alertLevel(level) {
    console.log("Niveau d'alerte militaire : " + level);
  }
};

export default Military;