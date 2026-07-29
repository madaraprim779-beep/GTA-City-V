// Système stades GTA

const Stadiums = {
    stadiums: [],

    addStadium(name, location, capacity) {
        const stadium = {
            id: this.stadiums.length + 1,
            name: name,
            location: location,
            capacity: capacity,
            events: []
        };

        this.stadiums.push(stadium);

        console.log("Stade ajouté :", stadium);
        return stadium;
    },

    addEvent(stadiumId, event) {
        const stadium = this.stadiums.find(
            s => s.id === stadiumId
        );

        if (stadium) {
            stadium.events.push(event);

            console.log("Événement ajouté :", event);
        }
    },

    getStadiums() {
        return this.stadiums;
    }
};

module.exports = Stadiums;