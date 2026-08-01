// Système bateaux GTA

const Boats = {
    boats: [],

    addBoat(name, type, speed) {
        const boat = {
            id: this.boats.length + 1,
            name: name,
            type: type,
            speed: speed,
            fuel: 100
        };

        this.boats.push(boat);

        console.log("Bateau ajouté :", boat);
        return boat;
    },

    sail(id) {
        const boat = this.boats.find(
            b => b.id === id
        );

        if (boat) {
            console.log(
                "Navigation avec :",
                boat.name
            );
        }
    },

    getBoats() {
        return this.boats;
    }
};

module.exports = Boats;