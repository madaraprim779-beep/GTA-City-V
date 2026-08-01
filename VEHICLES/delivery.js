// Système véhicules livraison GTA

const DeliveryVehicles = {
    vehicles: [],

    addVehicle(name, type, capacity) {
        const vehicle = {
            id: this.vehicles.length + 1,
            name: name,
            type: type,
            capacity: capacity,
            packages: []
        };

        this.vehicles.push(vehicle);

        console.log("Véhicule livraison ajouté :", vehicle);
        return vehicle;
    },

    addPackage(id, packageName) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            vehicle.packages.push(packageName);

            console.log(
                "Colis ajouté :",
                packageName
            );
        }
    },

    deliver(id) {
        const vehicle = this.vehicles.find(
            v => v.id === id
        );

        if (vehicle) {
            vehicle.packages = [];

            console.log(
                "Livraison terminée"
            );
        }
    },

    getVehicles() {
        return this.vehicles;
    }
};

module.exports = DeliveryVehicles;