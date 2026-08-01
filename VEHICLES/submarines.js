// Système sous-marins GTA

const Submarines = {
    submarines: [],

    addSubmarine(name, type, depth) {
        const submarine = {
            id: this.submarines.length + 1,
            name: name,
            type: type,
            depth: depth,
            fuel: 100
        };

        this.submarines.push(submarine);

        console.log("Sous-marin ajouté :", submarine);
        return submarine;
    },

    dive(id) {
        const submarine = this.submarines.find(
            s => s.id === id
        );

        if (submarine) {
            console.log(
                "Plongée avec :",
                submarine.name
            );
        }
    },

    getSubmarines() {
        return this.submarines;
    }
};

module.exports = Submarines;