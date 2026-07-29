// Système maisons GTA

const Houses = {
    houses: [],

    addHouse(name, price, location) {
        const house = {
            id: this.houses.length + 1,
            name: name,
            price: price,
            location: location,
            owner: null
        };

        this.houses.push(house);

        console.log("Maison ajoutée :", house);
        return house;
    },

    buyHouse(id, player) {
        const house = this.houses.find(
            h => h.id === id
        );

        if (house && house.owner === null) {
            house.owner = player;

            console.log(
                "Maison achetée par :",
                player
            );
        }
    },

    getHouses() {
        return this.houses;
    }
};

module.exports = Houses;