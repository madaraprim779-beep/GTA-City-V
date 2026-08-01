// Système hélicoptères GTA

const Helicopters = {
    helicopters: [],

    addHelicopter(name, type, speed) {
        const helicopter = {
            id: this.helicopters.length + 1,
            name: name,
            type: type,
            speed: speed,
            fuel: 100
        };

        this.helicopters.push(helicopter);

        console.log("Hélicoptère ajouté :", helicopter);
        return helicopter;
    },

    fly(id) {
        const helicopter = this.helicopters.find(
            h => h.id === id
        );

        if (helicopter) {
            console.log(
                "Vol avec :",
                helicopter.name
            );
        }
    },

    getHelicopters() {
        return this.helicopters;
    }
};

module.exports = Helicopters;