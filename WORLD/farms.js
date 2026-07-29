// Système fermes GTA

const Farms = {
    farms: [],

    addFarm(name, location, type) {
        const farm = {
            id: this.farms.length + 1,
            name: name,
            location: location,
            type: type,
            animals: [],
            crops: []
        };

        this.farms.push(farm);

        console.log("Ferme ajoutée :", farm);
        return farm;
    },

    addAnimal(farmId, animal) {
        const farm = this.farms.find(
            f => f.id === farmId
        );

        if (farm) {
            farm.animals.push(animal);
            console.log("Animal ajouté :", animal);
        }
    },

    addCrop(farmId, crop) {
        const farm = this.farms.find(
            f => f.id === farmId
        );

        if (farm) {
            farm.crops.push(crop);
            console.log("Culture ajoutée :", crop);
        }
    },

    getFarms() {
        return this.f