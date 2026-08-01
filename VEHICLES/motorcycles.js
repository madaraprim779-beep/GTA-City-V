// Système motos GTA

const Motorcycles = {
    motorcycles: [],

    addMotorcycle(name, brand, speed) {
        const motorcycle = {
            id: this.motorcycles.length + 1,
            name: name,
            brand: brand,
            speed: speed,
            fuel: 100
        };

        this.motorcycles.push(motorcycle);

        console.log("Moto ajoutée :", motorcycle);
        return motorcycle;
    },

    ride(id) {
        const motorcycle = this.motorcycles.find(
            m => m.id === id
        );

        if (motorcycle) {
            console.log(
                "Conduite de la moto :",
                motorcycle.name
            );
        }
    },

    getMotorcycles() {
        return this.motorcycles;
    }
};

module.exports = Motorcycles;