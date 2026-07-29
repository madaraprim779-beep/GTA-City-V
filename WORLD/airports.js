// Système aéroports GTA

const Airports = {
    airports: [],

    addAirport(name, location) {
        const airport = {
            id: this.airports.length + 1,
            name: name,
            location: location,
            planes: []
        };

        this.airports.push(airport);

        console.log("Aéroport ajouté :", airport);
        return airport;
    },

    addPlane(airportId, plane) {
        const airport = this.airports.find(
            a => a.id === airportId
        );

        if (airport) {
            airport.planes.push(plane);

            console.log("Avion ajouté :", plane);
        }
    },

    getAirport(id) {
        return this.airports.find(
            a => a.id === id
        );
    },

    getAirports() {
        return this.airports;
    }
};

module.exports = Airports;