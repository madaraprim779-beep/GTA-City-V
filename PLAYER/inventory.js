// Inventaire du joueur GTA

const PlayerInventory = {
    items: [],

    addItem(name, quantity) {
        const item = {
            id: this.items.length + 1,
            name: name,
            quantity: quantity
        };

        this.items.push(item);

        console.log("Objet obtenu :", item);
        return item;
    },

    removeItem(id) {
        this.items = this.items.filter(
            item => item.id !== id
        );

        console.log("Objet retiré :", id);
    },

    showInventory() {
        console.log("Inventaire :", this.items);

        return this.items;
    }
};

module.exports = PlayerInventory;