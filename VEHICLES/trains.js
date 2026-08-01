// Système trains GTA

const Trains = {
    trains: [],

    addTrain(name, type, speed) {
        const train = {
            id: this.trains.length + 1,
            name: name,
            type: type,
            speed: speed,
            passengers: 0
        };

        this.trains.push(train);

        console.log("Train ajouté :", train);
        return train;
    },

    start(id) {
        const train = this.trains.find(
            t => t.id === id
        );

        if (train) {
            console.log(
                "Train en circulation :",
                train.name
            );
        }
    },

    getTrains() {
        return this.trains;
    }
};

module.exports = Trains;