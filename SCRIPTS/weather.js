// GTA City IV
// Gestion de la météo

class WeatherSystem {
  constructor() {
    this.currentWeather = "Ensoleillé";

    this.weathers = [
      "Ensoleillé",
      "Nuageux",
      "Pluie",
      "Orage",
      "Brouillard",
      "Tempête de sable"
    ];
  }

  setWeather(weather) {
    if (this.weathers.includes(weather)) {
      this.currentWeather = weather;
      console.log("Météo :", weather);
    }
  }

  randomWeather() {
    const index = Math.floor(Math.random() * this.weathers.length);
    this.currentWeather = this.weathers[index];
    console.log("Nouvelle météo :", this.currentWeather);
  }

  getWeather() {
    return this.currentWeather;
  }
}

export default WeatherSystem;