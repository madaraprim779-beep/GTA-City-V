// Compétences du joueur GTA

const Skills = {
    skills: {
        driving: 1,
        shooting: 1,
        stamina: 1,
        stealth: 1,
        hacking: 1
    },

    upgrade(skill) {
        if (this.skills[skill] !== undefined) {
            this.skills[skill]++;

            console.log(
                "Compétence améliorée :",
                skill,
                this.skills[skill]
            );
        }
    },

    getSkills() {
        return this.skills;
    }
};

module.exports = Skills;