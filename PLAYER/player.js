// Système joueur GTA

const Player = {
    name: "Player",
    health: 100,
    armor: 0,
    money: 0,
    position: {
        x: 0,
        y: 0,
        z: 0
    },

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

        console.log("Vie :", this.health);
    },

    addMoney(amount) {
        this.money += amount;

        console.log("Argent :", this.money);
    },

    getInfo() {
        return this;
    }
};

module.exports = Player;