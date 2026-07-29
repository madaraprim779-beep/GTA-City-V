// Position du joueur GTA

const Location = {
    position: {
        x: 0,
        y: 0,
        z: 0
    },

    setPosition(x, y, z) {
        this.position = {
            x: x,
            y: y,
            z: z
        };

        console.log("Nouvelle position :", this.position);
    },

    move(x, y, z) {
        this.position.x += x;
        this.position.y += y;
        this.position.z += z;

        console.log("Déplacement :", this.position);
    },

    getPosition() {
        return this.position;
    }
};

module.exports = Location;