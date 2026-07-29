// Système trafic GTA

const Traffic = {
    vehicles: [],
    density: "normal",

    addVehicle(type, position) {
        const vehicle = {
            id: this.vehicles.length + 1,
            type: type,
            position: position
        };

        this.vehicles.push(vehicle);

        console.log("Trafic ajouté :", vehicle);
        return vehicle;
    },

    setDensity(level) {
        this.density = level;
        console.log("Densité trafic :", level);
    },

    getTraffic() {
        return this.vehicles;
    }
};

module.exports = Traffic;