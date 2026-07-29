// Missions du joueur GTA

const PlayerMission = {
    active: [],
    completed: [],

    startMission(name) {
        const mission = {
            id: this.active.length + 1,
            name: name,
            status: "en cours"
        };

        this.active.push(mission);

        console.log("Mission commencée :", mission);
        return mission;
    },

    completeMission(id) {
        const mission = this.active.find(
            m => m.id === id
        );

        if (mission) {
            mission.status = "terminée";

            this.completed.push(mission);

            this.active = this.active.filter(
                m => m.id !== id
            );

            console.log("Mission terminée :", mission);
        }
    },

    getMissions() {
        return {
            active: this