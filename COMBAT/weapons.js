// Système armes GTA

const Weapons = {
    weapons: [],

    addWeapon(name, type, damage) {
        const weapon = {
            id: this.weapons.length + 1,
            name: name,
            type: type,
            damage: damage,
            ammo: 0
        };

        this.weapons.push(weapon);

        console.log("Arme ajoutée :", weapon);
        return weapon;
    },

    addAmmo(id, amount) {
        const weapon = this.weapons.find(
            w => w.id === id
        );

        if (weapon) {
            weapon.ammo += amount;

            console.log(
                "Munitions ajoutées :",
                amount
            );
        }
    },

    getWeapons() {
        return this.weapons;
    }
};

module.exports = Weapons;