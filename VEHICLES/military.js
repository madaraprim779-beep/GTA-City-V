// Système véhicules militaires GTA

const MilitaryVehicles = {
    vehicles: [],

    addVehicle(name, type, armor) {
        const vehicle = {
            id: this.vehicles.length + 1,
            name: name,
            type: type,
            armor: armor
        };

        this.vehicles.push(vehicle);

        console.log("Véhicule militaire ajouté :", vehicle);
        return vehicle;
    },

    repair(id) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            vehicle.armor = 100;

            console.log(
                "Véhicule réparé :",
                vehicle.name
            );
        }
    },

    getVehicles() {
        return this.vehicles;
    }
};

module.exports = MilitaryVehicles;