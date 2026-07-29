// Système rivières GTA

const Rivers = {
    rivers: [],

    addRiver(name, location, length) {
        const river = {
            id: this.rivers.length + 1,
            name: name,
            location: location,
            length: length
        };

        this.rivers.push(river);

        console.log("Rivière ajoutée :", river);
        return river;
    },

    getRiver(id) {
        return this.rivers.find(
            r => r.id === id
        );
    },

    getRivers() {
        return this.rivers;
    }
};

module.exports = Rivers;