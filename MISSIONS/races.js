// Système courses GTA

const Races = {
    races: [],

    addRace(name, checkpoints, reward) {
        const race = {
            id: this.races.length + 1,
            name: name,
            checkpoints: checkpoints,
            reward: reward,
            completed: false
        };

        this.races.push(race);

        console.log("Course ajoutée :", race);
        return race;
    },

    startRace(id) {
        const race = this.races.find(
            r => r.id === id
        );

        if (race) {
            console.log("Course commencée :", race.name);
        }
    },

    finishRace(id) {
        const race = this.races.find(
            r => r.id === id
        );

        if (race) {
            race.completed = true;

            console.log("Course terminée :", race.name);
        }
    },

    getRaces() {
        return this.races;
    }
};

module.exports = Races;