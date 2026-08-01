// Système missions principales GTA

const MainMissions = {
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

        console.log("Mission ajoutée :", mission);
        return mission;
    },

    startMission(id) {
        const mission = this.missions.find(
            m => m.id === id
        );

        if (mission) {
            console.log(
                "Mission commencée :",
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
                "Mission terminée :",
                mission.title
            );
        }
    },

    getMissions() {
        return this.missions;
    }
};

module.exports = MainMissions;