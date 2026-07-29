// Système argent joueur GTA

const Money = {
    cash: 0,
    bank: 0,

    addCash(amount) {
        this.cash += amount;

        console.log("Argent liquide :", this.cash);
    },

    removeCash(amount) {
        if (this.cash >= amount) {
            this.cash -= amount;

            console.log("Argent dépensé :", amount);
        } else {
            console.log("Pas assez d'argent");
        }
    },

    deposit(amount) {
        if (this.cash >= amount) {
            this.cash -= amount;
            this.bank += amount;

            console.log("Argent déposé :", amount);
        }
    },

    withdraw(amount) {
        if (this.bank >= amount) {
            this.bank -= amount;
            this.cash += amount;

            console.log("Argent retiré :", amount);
        }
    },

    getMoney() {
        return {
            cash: this.cash,
            bank: this.bank
        };
    }
};

module.exports = Money;