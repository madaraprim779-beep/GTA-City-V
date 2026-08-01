// Système véhicules spéciaux GTA

const SpecialVehicles = {
    vehicles: [],

    addVehicle(name, type, ability) {
        const vehicle = {
            id: this.vehicles.length + 1,
            name: name,
            type: type,
            ability: ability
        };

        this.vehicles.push(vehicle);

        console.log("Véhicule spécial ajouté :", vehicle);
        return vehicle;
    },

    activateAbility(id) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            console.log(
                "Capacité activée :",
                vehicle.ability
            );
        }
    },

    getVehicles() {
        return this.vehicles;
    }
};

module.exports = SpecialVehicles;