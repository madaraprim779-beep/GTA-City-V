// Système hôpitaux GTA

const Hospitals = {
    hospitals: [],

    addHospital(name, location) {
        const hospital = {
            id: this.hospitals.length + 1,
            name: name,
            location: location
        };

        this.hospitals.push(hospital);

        console.log("Hôpital ajouté :", hospital);
        return hospital;
    },

    healPlayer(player) {
        player.health = 100;

        console.log("Le joueur a été soigné");
    },

    getHospitals() {
        return this.hospitals;
    }
};

module.exports = Hospitals;