// Système taxis GTA

const Taxis = {
    taxis: [],

    addTaxi(name, model, price) {
        const taxi = {
            id: this.taxis.length + 1,
            name: name,
            model: model,
            price: price,
            available: true
        };

        this.taxis.push(taxi);

        console.log("Taxi ajouté :", taxi);
        return taxi;
    },

    takeTaxi(id, destination) {
        const taxi = this.taxis.find(
            t => t.id === id
        );

        if (taxi && taxi.available) {
            taxi.available = false;

            console.log(
                "Taxi vers :",
                destination
            );
        }
    },

    getTaxis() {
        return this.taxis;
    }
};

module.exports = Taxis;