// GTA City IV
// Fichier principal du jeu

const Game = {
  name: "GTA City IV",
  version: "0.1.0",

  player: null,
  city: "Nova Santos",
  mission: 1,
  money: 0,
  health: 100,
  wantedLevel: 0,

  start() {
    console.log("Bienvenue dans GTA City IV");
    console.log("Chargement du monde...");
  }
};

Game.start();