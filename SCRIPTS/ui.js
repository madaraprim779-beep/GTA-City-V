// Système interface GTA

const UI = {
    hud: true,
    notifications: [],

    showNotification(message) {
        this.notifications.push(message);

        console.log("Notification :", message);
    },

    toggleHUD() {
        this.hud = !this.hud;

        console.log(
            "HUD :",
            this.hud ? "activé" : "désactivé"
        );
    },

    getUI() {
        return {
            hud: this.hud,
            notifications: this.notifications
        };
    }
};

module.exports = UI;