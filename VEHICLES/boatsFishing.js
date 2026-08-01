// Système bateaux de pêche GTA

const FishingBoats = {
    boats: [],

    addBoat(name, capacity, equipment) {
        const boat = {
            id: this.boats.length + 1,
            name: name,
            capacity: capacity,
            equipment: equipment,
            fish: 0
        };

        this.boats.push(boat);

        console.log("Bateau de pêche ajouté :", boat);
        return boat;
    },

    catchFish(id, amount) {
        const boat = this.boats.find(
            b => b.id === id
        );

        if (boat) {
            boat.fish += amount;

            console.log(
                "Poissons capturés :",
                amount
            );
        }
    },

    getBoats() {
        return this.boats;
    }
};

module.exports = FishingBoats;