// Système recherche police joueur GTA

const Wanted = {
    stars: 0,
    maxStars: 5,

    increase(amount = 1) {
        this.stars += amount;

        if (this.stars > this.maxStars) {
            this.stars = this.maxStars;
        }

        console.log("Niveau de recherche :", this.stars);
    },

    decrease(amount = 1) {
        this.stars -= amount;

        if (this.stars < 0) {
            this.stars = 0;
        }

        console.log("Recherche diminuée :", this.stars);
    },

    clear() {
        this.stars = 0;

        console.log("Recherche terminée");
    },

    getStars() {
        return this.stars;
    }
};

module.exports = Wanted;