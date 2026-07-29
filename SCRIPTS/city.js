// GTA City IV
// Gestion des villes et des zones

const City = {
  name: "GTA City IV",

  locations: [
    {
      name: "Nova Santos",
      type: "Grande ville",
      places: [
        "Centre-ville",
        "Quartier riche",
        "Port",
        "Aéroport international"
      ]
    },

    {
      name: "Silver Vegas",
      type: "Ville du désert",
      places: [
        "Casino",
        "Circuit automobile",
        "Hôtels",
        "Routes secrètes"
      ]
    },

    {
      name: "Bay City",
      type: "Ville côtière",
      places: [
        "Plage",
        "Marina",
        "Port industriel",
        "Garages de tuning"
      ]
    }
  ],

  loadCity(cityName) {
    console.log("Chargement de " + cityName);
  }
};

export default City;