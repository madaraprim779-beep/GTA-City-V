// Système véhicules GTA

const Vehicles = {
    list: [],

    create(name, type, speed) {
        const vehicle = {
            id: this.list.length + 1,
            name: name,
            type: type,
            speed: speed,
            occupied: false
        };

        this.list.push(vehicle);
        console.log("Véhicule créé :", vehicle);

        return vehicle;
    },

    enter(id) {
        const vehicle = this.list.find(v => v.id === id);

        if (vehicle && !vehicle.occupied) {
            vehicle.occupied = true;
            console.log("Joueur monte dans", vehicle.name);
        }
    },

    exit(id) {
        const vehicle = this.list.find(v => v.id === id);

        if (vehicle) {
            vehicle.occupied = false;
            console.log("Joueur sort de", vehicle.name);
        }
    },

    getAll() {
        return this.list;
    }
};

module.exports = Vehicles;