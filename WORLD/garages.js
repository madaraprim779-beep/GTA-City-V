// Système garages GTA

const Garages = {
    garages: [],

    addGarage(name, location) {
        const garage = {
            id: this.garages.length + 1,
            name: name,
            location: location,
            vehicles: []
        };

        this.garages.push(garage);

        console.log("Garage ajouté :", garage);
        return garage;
    },

    parkVehicle(garageId, vehicle) {
        const garage = this.garages.find(
            g => g.id === garageId
        );

        if (garage) {
            garage.vehicles.push(vehicle);

            console.log("Véhicule garé :", vehicle);
        }
    },

    getGarage(id) {
        return this.garages.find(
            g => g.id === id
        );
    },

    getGarages() {
        return this.garages;
    }
};

module.exports = Garages;