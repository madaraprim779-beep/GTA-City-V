// Véhicule du joueur GTA

const PlayerVehicle = {
    currentVehicle: null,

    enter(vehicle) {
        this.currentVehicle = vehicle;

        console.log(
            "Le joueur monte dans :",
            vehicle
        );
    },

    exit() {
        console.log(
            "Le joueur sort du véhicule :",
            this.currentVehicle
        );

        this.currentVehicle = null;
    },

    getVehicle() {
        return this.currentVehicle;
    }
};

module.exports = PlayerVehicle;