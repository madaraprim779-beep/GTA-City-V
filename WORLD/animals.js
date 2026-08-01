// Système animaux GTA

const Animals = {
    animals: [],

    addAnimal(name, species, location) {
        const animal = {
            id: this.animals.length + 1,
            name: name,
            species: species,
            location: location,
            health: 100
        };

        this.animals.push(animal);

        console.log("Animal ajouté :", animal);
        return animal;
    },

    moveAnimal(id, location) {
        const animal = this.animals.find(
            a => a.id === id
        );

        if (animal) {
            animal.location = location;

            console.log(
                "Animal déplacé :",
                animal.name
            );
        }
    },

    getAnimals() {
        return this.animals;
    }
};

module.exports = Animals;