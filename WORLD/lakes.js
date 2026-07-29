// Système lacs GTA

const Lakes = {
    lakes: [],

    addLake(name, location, size) {
        const lake = {
            id: this.lakes.length + 1,
            name: name,
            location: location,
            size: size
        };

        this.lakes.push(lake);

        console.log("Lac ajouté :", lake);
        return lake;
    },

    getLake(id) {
        return this.lakes.find(
            l => l.id === id
        );
    },

    getLakes() {
        return this.lakes;
    }
};

module.exports = Lakes;