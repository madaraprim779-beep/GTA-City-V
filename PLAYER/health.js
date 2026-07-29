// Système santé joueur GTA

const Health = {
    health: 100,
    armor: 0,

    takeDamage(amount) {
        this.health -= amount;

        if (this.health < 0) {
            this.health = 0;
        }

        console.log("Vie restante :", this.health);
    },

    heal(amount) {
        this.health += amount;

        if (this.health > 100) {
            this.health = 100;
        }

        console.log("Vie actuelle :", this.health);
    },

    addArmor(amount) {
        this.armor += amount;

        if (this.armor > 100) {
            this.armor = 100;
        }

        console.log("Armure :", this.armor);
    },

    getStatus() {
        return {
            health: this.health,
            armor: this.armor
        };
    }
};

module.exports = Health;