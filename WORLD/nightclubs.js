// Système boîtes de nuit GTA

const Nightclubs = {
    clubs: [],

    addClub(name, location, capacity) {
        const club = {
            id: this.clubs.length + 1,
            name: name,
            location: location,
            capacity: capacity,
            visitors: 0
        };

        this.clubs.push(club);

        console.log("Boîte de nuit ajoutée :", club);
        return club;
    },

    addVisitor(id) {
        const club = this.clubs.find(
            c => c.id === id
        );

        if (club && club.visitors < club.capacity) {
            club.visitors++;

            console.log(
                "Visiteur entré dans :",
                club.name
            );
        }
    },

    getClubs() {
        return this.clubs;
    }
};

module.exports = Nightclubs;