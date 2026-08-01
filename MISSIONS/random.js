// Système missions aléatoires GTA

const RandomMissions = {
    missions: [],

    addMission(type, location, reward) {
        const mission = {
            id: this.missions.length + 1,
            type: type,
            location: location,
            reward: reward,
            active: false
        };

        this.missions.push(mission);

        console.log("Mission aléatoire ajoutée :", mission);
        return mission;
    },

    generate() {
        if (this.missions.length > 0) {
            const random = Math.floor(
                Math.random() * this.missions.length
            );

            const mission = this.missions[random];
            mission.active = true;

            console.log(
                "Nouvelle mission :",
                mission
            );

            return mission;
        }
    },

    getMissions() {
        return this.missions;
    }
};

module.exports = RandomMissions;