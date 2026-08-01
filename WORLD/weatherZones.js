// Système zones météo GTA

const WeatherZones = {
    zones: [],

    addZone(name, weather, location) {
        const zone = {
            id: this.zones.length + 1,
            name: name,
            weather: weather,
            location: location
        };

        this.zones.push(zone);

        console.log("Zone météo ajoutée :", zone);
        return zone;
    },

    changeWeather(id, weather) {
        const zone = this.zones.find(
            z => z.id === id
        );

        if (zone) {
            zone.weather = weather;

            console.log(
                "Météo changée dans :",
                zone.name
            );
        }
    },

    getZones() {
        return this.zones;
    }
};

module.exports = WeatherZones;