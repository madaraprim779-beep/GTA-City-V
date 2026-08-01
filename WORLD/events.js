// Système événements GTA

const Events = {
    events: [],

    addEvent(name, type, location, reward) {
        const event = {
            id: this.events.length + 1,
            name: name,
            type: type,
            location: location,
            reward: reward,
            active: false
        };

        this.events.push(event);

        console.log("Événement ajouté :", event);
        return event;
    },

    startEvent(id) {
        const event = this.events.find(
            e => e.id === id
        );

        if (event) {
            event.active = true;

            console.log(
                "Événement démarré :",
                event.name
            );
        }
    },

    endEvent(id) {
        const event = this.events.find(
            e => e.id === id
        );

        if (event) {
            event.active = false;

            console.log(
                "Événement terminé :",
                event.name
            );
        }
    },

    getEvents() {
        return this.events;
    }
};

module.exports = Events;