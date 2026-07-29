// Système commissariats GTA

const PoliceStations = {
    stations: [],

    addStation(name, location) {
        const station = {
            id: this.stations.length + 1,
            name: name,
            location: location
        };

        this.stations.push(station);

        console.log("Commissariat ajouté :", station);
        return station;
    },

    arrestPlayer(player) {
        player.wantedLevel = 0;

        console.log("Le joueur a été arrêté");
    },

    getStations() {
        return this.stations;
    }
};

module.exports = PoliceStations;