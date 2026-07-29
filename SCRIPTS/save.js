// Système sauvegarde GTA

const Save = {
    data: {},

    save(player) {
        this.data = player;

        console.log("Sauvegarde réussie :", this.data);
    },

    load() {
        console.log("Chargement sauvegarde :", this.data);

        return this.data;
    },

    clear() {
        this.data = {};

        console.log("Sauvegarde supprimée");
    }
};

module.exports = Save;