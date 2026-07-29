// Système montagnes GTA

const Mountains = {
    mountains: [],

    addMountain(name, location, height) {
        const mountain = {
            id: this.mountains.length + 1,
            name: name,
            location: location,
            height: height
        };

        this.mountains.push(mountain);

        console.log("Montagne ajoutée :", mountain);
        return mountain;
    },

    getMountain(id) {
        return this.mountains.find(
            m => m.id === id
        );
    },

    getMountains() {
        return this.mountains;
    }
};

module.exports = Mountains;