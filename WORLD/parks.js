// Système parcs GTA

const Parks = {
    parks: [],

    addPark(name, location) {
        const park = {
            id: this.parks.length + 1,
            name: name,
            location: location,
            visitors: 0
        };

        this.parks.push(park);

        console.log("Parc ajouté :", park);
        return park;
    },

    enterPark(id) {
        const park = this.parks.find(
            p => p.id === id
        );

        if (park) {
            park.visitors++;

            console.log("Entrée dans le parc :", park.name);
        }
    },

    getPark(id) {
        return this.parks.find(
            p => p.id === id
        );
    },

    getParks() {
        return this.parks;
    }
};

module.exports = Parks;