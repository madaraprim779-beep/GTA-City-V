// Système ports GTA

const Ports = {
    ports: [],

    addPort(name, location) {
        const port = {
            id: this.ports.length + 1,
            name: name,
            location: location,
            ships: []
        };

        this.ports.push(port);

        console.log("Port ajouté :", port);
        return port;
    },

    addShip(portId, ship) {
        const port = this.ports.find(
            p => p.id === portId
        );

        if (port) {
            port.ships.push(ship);

            console.log("Bateau ajouté :", ship);
        }
    },

    getPort(id) {
        return this.ports.find(
            p => p.id === id
        );
    },

    getPorts() {
        return this.ports;
    }
};

module.exports = Ports;