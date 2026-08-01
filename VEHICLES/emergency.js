// Système véhicules d'urgence GTA

const EmergencyVehicles = {
    vehicles: [],

    addVehicle(name, type, speed) {
        const vehicle = {
            id: this.vehicles.length + 1,
            name: name,
            type: type,
            speed: speed,
            active: true
        };

        this.vehicles.push(vehicle);

        console.log("Véhicule d'urgence ajouté :", vehicle);
        return vehicle;
    },

    dispatch(id, location) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            vehicle.location = location;

            console.log(
                "Véhicule envoyé vers :",
                location
            );
        }
    },

    getVehicles() {
        return this.vehicles;
    }
};

module.exports = EmergencyVehicles;