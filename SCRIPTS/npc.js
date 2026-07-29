// GTA City IV
// Gestion des PNJ

const NPC = {
  types: [
    "Habitant",
    "Policier",
    "Militaire",
    "Commerçant",
    "Mécanicien",
    "Chauffeur",
    "Touriste"
  ],

  population: 1000,

  behavior: {
    walk: true,
    drive: true,
    reactToEvents: true,
    callPolice: true
  },

  create(type, location) {
    console.log(
      "Nouveau PNJ : " + type + " dans " + location
    );
  },

  react(event) {
    console.log("Le PNJ réagit à : " + event);
  }
};

export default NPC;