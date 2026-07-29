// Système carte GTA

const Map = {
    zones: [],

    addZone(name, type, x, y) {
        const zone = {
            id: this.zones.length + 1,
            name: name,
            type: type,
            position: {
                x: x,
                y: y
            }
        };

        this.zones.push(zone);

        console.log("Zone ajoutée :", zone);
        return zone;
    },

    getZone(id) {
        return this.zones.find(z => z.id === id);
    },

    getAllZones() {
        return this.zones;
    }
};

module.exports = Map;