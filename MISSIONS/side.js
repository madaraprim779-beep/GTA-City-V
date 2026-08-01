// Système missions secondaires GTA

const SideMissions = {
    missions: [],

    addMission(title, description, reward) {
        const mission = {
            id: this.missions.length + 1,
            title: title,
            description: description,
            reward: reward,
            completed: false
        };

        this.missions.push(mission);

        console.log("Mission secondaire ajoutée :", mission);
        return mission;
    },

    startMission(id) {
        const mission = this.missions.find(
            m => m.id === id
        );

        if (mission) {
            console.log(
                "Mission secondaire commencée :",
                mission.title
            );
        }
    },

    completeMission(id) {
        const mission = this.missions.find(
            m => m.id === id
        );

        if (mission) {
            mission.completed = true;

            console.log(
                "Mission secondaire terminée :",
                mission.title
            );
        }
    },

    getMissions() {
        return this.missions;
    }
};

module.exports = SideMissions;