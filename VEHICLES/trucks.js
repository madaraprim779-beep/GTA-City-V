// Système camions GTA

const Trucks = {
    trucks: [],

    addTruck(name, brand, capacity) {
        const truck = {
            id: this.trucks.length + 1,
            name: name,
            brand: brand,
            capacity: capacity,
            fuel: 100
        };

        this.trucks.push(truck);

        console.log("Camion ajouté :", truck);
        return truck;
    },

    loadCargo(id, cargo) {
        const truck = this.trucks.find(
            t => t.id === id
        );

        if (truck) {
            truck.cargo = cargo;

            console.log(
                "Chargement ajouté :",
                cargo
            );
        }
    },

    getTrucks() {
        return this.trucks;
    }
};

module.exports = Trucks;