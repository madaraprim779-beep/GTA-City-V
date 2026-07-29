// Système stations-service GTA

const GasStations = {
    stations: [],

    addStation(name, location) {
        const station = {
            id: this.stations.length + 1,
            name: name,
            location: location,
            fuelPrice: 1.50
        };

        this.stations.push(station);

        console.log("Station-service ajoutée :", station);
        return station;
    },

    refuel(vehicle, liters) {
        if (!vehicle) {
            console.log("Aucun véhicule");
            return;
        }

        vehicle.fuel = (vehicle.fuel || 0) + liters;

        console.log(
            "Véhicule ravitaillé :",
            liters,
            "litres"
        );
    },

    getStations() {
        return this.stations;
    }
};

module.exports = GasStations;