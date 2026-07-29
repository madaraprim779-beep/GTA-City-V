// Système caméra GTA

const Camera = {
    mode: "third_person",
    zoom: 1,

    changeMode(mode) {
        this.mode = mode;

        console.log("Mode caméra :", mode);
    },

    setZoom(level) {
        this.zoom = level;

        console.log("Zoom caméra :", level);
    },

    getCamera() {
        return {
            mode: this.mode,
            zoom: this.zoom
        };
    }
};

module.exports = Camera;