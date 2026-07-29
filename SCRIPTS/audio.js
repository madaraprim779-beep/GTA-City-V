// Système audio GTA

const Audio = {
    volume: 100,
    music: true,

    playSound(name) {
        console.log("Son joué :", name);
    },

    setVolume(level) {
        this.volume = level;

        console.log("Volume :", level);
    },

    toggleMusic() {
        this.music = !this.music;

        console.log(
            "Musique :",
            this.music ? "activée" : "désactivée"
        );
    },

    getSettings() {
        return {
            volume: this.volume,
            music: this.music
        };
    }
};

module.exports = Audio;