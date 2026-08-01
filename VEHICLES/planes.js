// Système avions GTA

const Planes = {
    planes: [],

    addPlane(name, type, speed) {
        const plane = {
            id: this.planes.length + 1,
            name: name,
            type: type,
            speed: speed,
            fuel: 100
        };

        this.planes.push(plane);

        console.log("Avion ajouté :", plane);
        return plane;
    },

    fly(id) {
        const plane = this.planes.find(
            p => p.id === id
        );

        if (plane) {
            console.log(
                "Décollage de :",
                plane.name
            );
        }
    },

    getPlanes() {
        return this.planes;
    }
};

module.exports = Planes;