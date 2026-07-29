// Système banques GTA

const Banks = {
    banks: [],

    addBank(name, location) {
        const bank = {
            id: this.banks.length + 1,
            name: name,
            location: location,
            security: 100
        };

        this.banks.push(bank);

        console.log("Banque ajoutée :", bank);
        return bank;
    },

    deposit(player, amount) {
        player.bank += amount;

        console.log(
            "Argent déposé :",
            amount
        );
    },

    withdraw(player, amount) {
        if (player.bank >= amount) {
            player.bank -= amount;

            console.log(
                "Argent retiré :",
                amount
            );
        }
    },

    getBanks() {
        return this.banks;
    }
};

module.exports = Banks;