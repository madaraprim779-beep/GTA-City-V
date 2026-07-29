// GTA City IV
// Gestion du monde ouvert

const World = {
  time: {
    hour: 12,
    day: 1
  },

  weather: "Soleil",

  traffic: {
    cars: true,
    pedestrians: true
  },

  events: [
    "Accident de voiture",
    "Course de rue",
    "Poursuite policière",
    "Rencontre aléatoire"
  ],

  changeWeather(newWeather) {
    this.weather = newWeather;
    console.log("Météo : " + newWeather);
  },

  nextDay() {
    this.time.day++;
    console.log("Nouveau jour : " + this.time.day);
  },

  spawnEvent(event) {
    console.log("Événement : " + event);
  }
};

export default World;