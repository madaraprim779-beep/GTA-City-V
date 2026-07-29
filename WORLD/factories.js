// Système usines GTA

const Factories = {
    factories: [],

    addFactory(name, location, type) {
        const factory = {
            id: this.factories.length + 1,
            name: name,
            location: location,
            type: type,
            workers: 0
        };

        this.factories.push(factory);

        console.log("Usine ajoutée :", factory);
        return factory;
    },

    addWorkers(id, amount) {
        const factory = this.factories.find(
            f => f.id === id
        );

        if (factory) {
            factory.workers += amount;

            console.log(
                "Travailleurs ajoutés :",
                amount
            );
        }
    },

    getFactories() {
        return this.factories;
    }
};

module.exports = Factories;