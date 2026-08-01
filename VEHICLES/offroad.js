// Système véhicules tout-terrain GTA

const OffroadVehicles = {
    vehicles: [],

    addVehicle(name, type, durability) {
        const vehicle = {
            id: this.vehicles.length + 1,
            name: name,
            type: type,
            durability: durability,
            fuel: 100
        };

        this.vehicles.push(vehicle);

        console.log("Véhicule tout-terrain ajouté :", vehicle);
        return vehicle;
    },

    driveOffroad(id, terrain) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            console.log(
                "Conduite sur terrain :",
                terrain
            );
        }
    },

    getVehicles() {
        return this.vehicles;
    }
};

module.exports = OffroadVehicles;