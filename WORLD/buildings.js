// Système bâtiments GTA

const Buildings = {
    buildings: [],

    addBuilding(name, type, x, y) {
        const building = {
            id: this.buildings.length + 1,
            name: name,
            type: type,
            position: {
                x: x,
                y: y
            }
        };

        this.buildings.push(building);

        console.log("Bâtiment ajouté :", building);
        return building;
    },

    getBuilding(id) {
        return this.buildings.find(
            building => building.id === id
        );
    },

    getAllBuildings() {
        return this.buildings;
    }
};

module.exports = Buildings;