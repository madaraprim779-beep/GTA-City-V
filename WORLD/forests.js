// Système forêts GTA

const Forests = {
    forests: [],

    addForest(name, location, size) {
        const forest = {
            id: this.forests.length + 1,
            name: name,
            location: location,
            size: size,
            animals: []
        };

        this.forests.push(forest);

        console.log("Forêt ajoutée :", forest);
        return forest;
    },

    addAnimal(forestId, animal) {
        const forest = this.forests.find(
            f => f.id === forestId
        );

        if (forest) {
            forest.animals.push(animal);

            console.log("Animal ajouté :", animal);
        }
    },

    getForests() {
        return this.forests;
    }
};

module.exports = Forests;