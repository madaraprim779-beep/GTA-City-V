// Système PNJ GTA

const NPCs = {
    npcs: [],

    addNPC(name, type, location) {
        const npc = {
            id: this.npcs.length + 1,
            name: name,
            type: type,
            location: location,
            health: 100
        };

        this.npcs.push(npc);

        console.log("PNJ ajouté :", npc);
        return npc;
    },

    moveNPC(id, location) {
        const npc = this.npcs.find(
            n => n.id === id
        );

        if (npc) {
            npc.location = location;

            console.log(
                "PNJ déplacé :",
                npc.name
            );
        }
    },

    getNPCs() {
        return this.npcs;
    }
};

module.exports = NPCs;