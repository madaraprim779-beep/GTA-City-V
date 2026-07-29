// Système gares GTA

const TrainStations = {
    stations: [],

    addStation(name, location) {
        const station = {
            id: this.stations.length + 1,
            name: name,
            location: location,
            trains: []
        };

        this.stations.push(station);

        console.log("Gare ajoutée :", station);
        return station;
    },

    addTrain(stationId, train) {
        const station = this.stations.find(
            s => s.id === stationId
        );

        if (station) {
            station.trains.push(train);

            console.log("Train ajouté :", train);
        }
    },

    getStation(id) {
        return this.stations.find(
            s => s.id === id
        );
    },

    getStations() {
        return this.stations;
    }
};

module.exports = TrainStations;