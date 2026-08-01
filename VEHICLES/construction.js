// Système véhicules construction GTA

const ConstructionVehicles = {
    vehicles: [],

    addVehicle(name, type, power) {
        const vehicle = {
            id: this.vehicles.length + 1,
            name: name,
            type: type,
            power: power,
            working: false
        };

        this.vehicles.push(vehicle);

        console.log("Véhicule construction ajouté :", vehicle);
        return vehicle;
    },

    startWork(id) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            vehicle.working = true;

            console.log(
                "Travail commencé avec :",
                vehicle.name
            );
        }
    },

    stopWork(id) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            vehicle.working = false;

            console.log(
                "Travail terminé"
            );
        }
    },

    getVehicles() {
        return this.vehicles;
    }
};

module.exports = ConstructionVehicles;