// Système inventaire GTA

const Inventory = {
    items: [],

    addItem(name, quantity) {
        const item = {
            id: this.items.length + 1,
            name: name,
            quantity: quantity
        };

        this.items.push(item);

        console.log("Objet ajouté :", item);
        return item;
    },

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);

        console.log("Objet supprimé :", id);
    },

    getItems() {
        return this.items;
    },

    clear() {
        this.items = [];

        console.log("Inventaire vidé");
    }
};

module.exports = Inventory;