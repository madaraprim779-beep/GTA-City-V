// Système dégâts GTA

const Damage = {
    apply(target, amount, type) {
        if (!target.health) {
            target.health = 100;
        }

        target.health -= amount;

        console.log(
            "Dégâts reçus :",
            amount,
            "Type :",
            type
        );

        if (target.health <= 0) {
            this.eliminate(target);
        }
    },

    heal(target, amount) {
        target.health += amount;

        if (target.health > 100) {
            target.health = 100;
        }

        console.log(
            "Vie restaurée :",
            amount
        );
    },

    eliminate(target) {
        target.health = 0;

        console.log(
            "Personnage hors combat"
        );
    }
};

module.exports = Damage;