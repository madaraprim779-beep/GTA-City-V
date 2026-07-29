// GTA City IV
// Gestion des magasins et services

const Shop = {
  locations: [
    {
      name: "City Market",
      type: "Commerce",
      city: "Nova Santos",
      services: [
        "Achats divers",
        "Nourriture",
        "Objets utiles"
      ]
    },

    {
      name: "Style Avenue",
      type: "Vêtements",
      city: "Bay City",
      services: [
        "Tenues",
        "Accessoires",
        "Personnalisation personnage"
      ]
    },

    {
      name: "Defense Center",
      type: "Armurerie",
      city: "Silver Vegas",
      services: [
        "Équipements de mission",
        "Personnalisation équipement",
        "Stockage"
      ]
    }
  ],

  buy(item) {
    console.log("Achat effectué : " + item);
  },

  enterShop(name) {
    console.log("Entrée dans : " + name);
  }
};

export default Shop;