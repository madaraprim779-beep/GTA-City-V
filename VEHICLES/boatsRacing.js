// Système courses de bateaux GTA

const BoatsRacing = {
    boats: [],

    addBoat(name, speed, category) {
        const boat = {
            id: this.boats.length + 1,
            name: name,
            speed: speed,
            category: category,
            tuned: false
        };

        this.boats.push(boat);

        console.log("Bateau de course ajouté :", boat);
        return boat;
    },

    tune(id) {
        const boat = this.boats.find(
            b => b.id === id
        );

        if (boat) {
            boat.tuned = true;

            console.log(
                "Bateau amélioré :",
                boat.name
            );
        }
    },

    getBoats() {
        return this.boats;
    }
};

module.exports = BoatsRacing;