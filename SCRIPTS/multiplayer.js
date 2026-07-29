// Système multijoueur GTA

const Multiplayer = {
    players: [],

    addPlayer(name, id) {
        const player = {
            id: id,
            name: name,
            online: true
        };

        this.players.push(player);

        console.log("Joueur connecté :", player);
        return player;
    },

    removePlayer(id) {
        this.players = this.players.filter(
            player => player.id !== id
        );

        console.log("Joueur déconnecté :", id);
    },

    getPlayers() {
        return this.players;
    },

    count() {
        return this.players.length;
    }
};

module.exports = Multiplayer;