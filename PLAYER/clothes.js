// Système vêtements joueur GTA

const Clothes = {
    outfit: {
        top: "default",
        pants: "default",
        shoes: "default"
    },

    change(item, value) {
        if (this.outfit[item] !== undefined) {
            this.outfit[item] = value;

            console.log(
                "Vêtement changé :",
                item,
                value
            );
        }
    },

    getOutfit() {
        return this.outfit;
    },

    reset() {
        this.outfit = {
            top: "default",
            pants: "default",
            shoes: "default"
        };

        console.log("Tenue remise par défaut");
    }
};

module.exports = Clothes;