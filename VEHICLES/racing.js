// Système véhicules de course GTA

const RacingVehicles = {
    vehicles: [],

    addVehicle(name, category, speed) {
        const vehicle = {
            id: this.vehicles.length + 1,
            name: name,
            category: category,
            speed: speed,
            tuned: false
        };

        this.vehicles.push(vehicle);

        console.log("Véhicule de course ajouté :", vehicle);
        return vehicle;
    },

    tune(id) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            vehicle.tuned = true;

            console.log(
                "Véhicule amélioré :",
                vehicle.name
            );
        }
    },

    getVehicles() {
        return this.vehicles;
    }
};

module.exports = RacingVehicles;