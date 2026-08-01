// Système bus GTA

const Buses = {
    buses: [],

    addBus(name, brand, seats) {
        const bus = {
            id: this.buses.length + 1,
            name: name,
            brand: brand,
            seats: seats,
            passengers: 0
        };

        this.buses.push(bus);

        console.log("Bus ajouté :", bus);
        return bus;
    },

    addPassenger(id) {
        const bus = this.buses.find(
            b => b.id === id
        );

        if (bus && bus.passengers < bus.seats) {
            bus.passengers++;

            console.log(
                "Passager ajouté dans :",
                bus.name
            );
        }
    },

    getBuses() {
        return this.buses;
    }
};

module.exports = Buses;