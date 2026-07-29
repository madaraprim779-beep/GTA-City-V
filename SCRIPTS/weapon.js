// Système armes GTA

const Weapon = {
    weapons: [],

    addWeapon(name, damage, ammo) {
        const weapon = {
            id: this.weapons.length + 1,
            name: name,
            damage: damage,
            ammo: ammo
        };

        this.weapons.push(weapon);

        console.log("Arme ajoutée :", weapon);
        return weapon;
    },

    useWeapon(id) {
        const weapon = this.weapons.find(w => w.id === id);

        if (weapon && weapon.ammo > 0) {
            weapon.ammo--;

            console.log(
                "Tir avec",
                weapon.name,
                "- Munitions restantes :",
                weapon.ammo
            );
        } else {
            console.log("Pas de munitions !");
        }
    },

    reload(id, ammo) {
        const weapon = this.weapons.find(w => w.id === id);

        if (weapon) {
            weapon.ammo += ammo;
            console.log("Arme rechargée :", weapon.name);
        }
    },

    getWeapons() {
        return this.weapons;
    }
};

module.exports = Weapon;