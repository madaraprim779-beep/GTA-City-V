// Système îles GTA

const Islands = {
    islands: [],

    addIsland(name, location, size) {
        const island = {
            id: this.islands.length + 1,
            name: name,
            location: location,
            size: size,
            unlocked: false
        };

        this.islands.push(island);

        console.log("Île ajoutée :", island);
        return island;
    },

    unlockIsland(id) {
        const island = this.islands.find(
            i => i.id === id
        );

        if (island) {
            island.unlocked = true;

            console.log(
                "Île débloquée :",
                island.name
            );
        }
    },

    getIslands() {
        return this.islands;
    }
};

module.exports = Islands;