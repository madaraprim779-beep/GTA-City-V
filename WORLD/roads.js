// Système routes GTA

const Roads = {
    roads: [],

    addRoad(name, type, start, end) {
        const road = {
            id: this.roads.length + 1,
            name: name,
            type: type,
            start: start,
            end: end
        };

        this.roads.push(road);

        console.log("Route ajoutée :", road);
        return road;
    },

    getRoad(id) {
        return this.roads.find(
            road => road.id === id
        );
    },

    getAllRoads() {
        return this.roads;
    }
};

module.exports = Roads;