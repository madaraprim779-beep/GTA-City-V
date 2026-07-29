// Système magasins GTA

const Shops = {
    shops: [],

    addShop(name, type, items) {
        const shop = {
            id: this.shops.length + 1,
            name: name,
            type: type,
            items: items
        };

        this.shops.push(shop);

        console.log("Magasin ajouté :", shop);
        return shop;
    },

    buyItem(shopId, item) {
        const shop = this.shops.find(
            s => s.id === shopId
        );

        if (shop && shop.items.includes(item)) {
            console.log("Achat :", item);
            return item;
        }

        console.log("Objet indisponible");
    },

    getShops() {
        return this.shops;
    }
};

module.exports = Shops;