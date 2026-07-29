// Système de temps GTA

const Time = {
    hour: 12,
    minute: 0,

    update() {
        this.minute += 1;

        if (this.minute >= 60) {
            this.minute = 0;
            this.hour++;
        }

        if (this.hour >= 24) {
            this.hour = 0;
        }
    },

    setTime(hour, minute = 0) {
        this.hour = hour;
        this.minute = minute;
    },

    getTime() {
        return `${this.hour.toString().padStart(2, "0")}:${this.minute
            .toString()
            .padStart(2, "0")}`;
    },

    getPeriod() {
        if (this.hour >= 6 && this.hour < 18) {
            return "Jour ☀️";
        } else {
            return "Nuit 🌙";
        }
    }
};

module.exports = Time;