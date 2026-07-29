// Statistiques du joueur GTA

const Stats = {
    level: 1,
    experience: 0,
    strength: 0,
    driving: 0,
    shooting: 0,

    addExperience(amount) {
        this.experience += amount;

        if (this.experience >= 100) {
            this.level++;
            this.experience = 0;

            console.log("Niveau augmenté :", this.level);
        }
    },

    improveSkill(skill) {
        if (this[skill] !== undefined) {
            this[skill]++;

            console.log(
                skill,
                "amélioré :",
                this[skill]
            );
        }
    },

    getStats() {
        return this;
    }
};

module.exports = Stats;