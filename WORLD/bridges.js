// Système ponts GTA

const Bridges = {
    bridges: [],

    addBridge(name, location, length) {
        const bridge = {
            id: this.bridges.length + 1,
            name: name,
            location: location,
            length: length,
            open: true
        };

        this.bridges.push(bridge);

        console.log("Pont ajouté :", bridge);
        return bridge;
    },

    openBridge(id) {
        const bridge = this.bridges.find(
            b => b.id === id
        );

        if (bridge) {
            bridge.open = true;
            console.log("Pont ouvert :", bridge.name);
        }
    },

    closeBridge(id) {
        const bridge = this.bridges.find(
            b => b.id === id
        );

        if (bridge) {
            bridge.open = false;
            console.log("Pont fermé :", bridge.name);
        }
    },

    getBridges() {
        return this.bridges;
    }
};

module.exports = Bridges;