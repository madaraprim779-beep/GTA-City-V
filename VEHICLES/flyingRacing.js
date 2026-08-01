// Système courses aériennes GTA

const FlyingRacing = {
    aircrafts: [],

    addAircraft(name, type, speed) {
        const aircraft = {
            id: this.aircrafts.length + 1,
            name: name,
            type: type,
            speed: speed,
            tuned: false
        };

        this.aircrafts.push(aircraft);

        console.log("Appareil de course ajouté :", aircraft);
        return aircraft;
    },

    tune(id) {
        const aircraft = this.aircrafts.find(
            a => a.id === id
        );

        if (aircraft) {
            aircraft.tuned = true;

            console.log(
                "Appareil amélioré :",
                aircraft.name
            );
        }
    },

    getAircrafts() {
        return this.aircrafts;
    }
};

module.exports = FlyingRacing;