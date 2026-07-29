// Système missions GTA

const Missions = {
    missions: [],

    create(title, description, reward) {
        const mission = {
            id: this.missions.length + 1,
            title: title,
            description: description,
            reward: reward,
            completed: false
        };

        this.missions.push(mission);

        console.log("Mission créée :", mission);
        return mission;
    },

    complete(id) {
        const mission = this.missions.find(m => m.id === id);

        if (mission && !mission.completed) {
            mission.completed = true;
            console.log(
                "Mission terminée ! Récompense :",
                mission.reward
            );
        }
    },

    getMissions() {
        return this.missions;
    }
};

module.exports = Missions;