// GTA City IV
// Gestion des missions

const Mission = {
  currentMission: 1,

  missions: [
    {
      id: 1,
      title: "Le retour en ville",
      city: "Nova Santos",
      reward: 500,
      status: "Disponible"
    },

    {
      id: 2,
      title: "Course de nuit",
      city: "Bay City",
      reward: 1000,
      status: "Bloquée"
    },

    {
      id: 3,
      title: "Le grand plan",
      city: "Silver Vegas",
      reward: 5000,
      status: "Bloquée"
    }
  ],

  startMission(id) {
    console.log("Mission démarrée : " + id);
  },

  completeMission(id) {
    console.log("Mission terminée : " + id);
  }
};

export default Mission;