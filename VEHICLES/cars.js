// Système voitures GTA

const Cars = {
    cars: [],

    addCar(name, brand, speed) {
        const car = {
            id: this.cars.length + 1,
            name: name,
            brand: brand,
            speed: speed,
            fuel: 100
        };

        this.cars.push(car);

        console.log("Voiture ajoutée :", car);
        return car;
    },

    drive(id) {
        const car = this.cars.find(
            c => c.id === id
        );

        if (car) {
            console.log(
                "Conduite de :",
                car.name
            );
        }
    },

    getCars() {
        return this.cars;
    }
};

module.exports = Cars;