// Système braquages GTA

const Heists = {
    heists: [],

    addHeist(name, target, reward) {
        const heist = {
            id: this.heists.length + 1,
            name: name,
            target: target,
            reward: reward,
            completed: false
        };

        this.heists.push(heist);

        console.log("Braquage ajouté :", heist);
        return heist;
    },

    startHeist(id) {
        const heist = this.heists.find(
            h => h.id === id
        );

        if (heist) {
            console.log(
                "Braquage commencé :",
                heist.name
            );
        }
    },

    completeHeist(id) {
        const heist = this.heists.find(
            h => h.id === id
        );

        if (heist) {
            heist.completed = true;

            console.log(
                "Braquage terminé :",
                heist.name
            );
        }
    },

    getHeists() {
        return this.heists;
    }
};

module.exports = Heists;