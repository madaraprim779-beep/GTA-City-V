// Système armes GTA

const Weapons = {
    inventory: [],

    addWeapon(name, damage, ammo) {
        const weapon = {
            id: this.inventory.length + 1,
            name: name,
            damage: damage,
            ammo: ammo
        };

        this.inventory.push(weapon);
        console.log("Arme ajoutée :", weapon);

        return weapon;
    },

    shoot(id) {
        const weapon = this.inventory.find(w => w.id === id);

        if (weapon && weapon.ammo > 0) {
            weapon.ammo--;
            console.log(
                weapon.name,
                "tir effectué. Munitions restantes :",
                weapon.ammo
            );
        } else {
            console.log("Pas de munitions !");
        }
    },

    reload(id, amount) {
        const weapon = this.inventory.find(w => w.id === id);

        if (weapon) {
            weapon.ammo += amount;
            console.log("Recharge :", weapon.name);
        }
    },

    getWeapons() {
        return this.inventory;
    }
};

module.exports = Weapons;