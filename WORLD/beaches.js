// Système plages GTA

const Beaches = {
    beaches: [],

    addBeach(name, location) {
        const beach = {
            id: this.beaches.length + 1,
            name: name,
            location: location,
            activities: []
        };

        this.beaches.push(beach);

        console.log("Plage ajoutée :", beach);
        return beach;
    },

    addActivity(beachId, activity) {
        const beach = this.beaches.find(
            b => b.id === beachId
        );

        if (beach) {
            beach.activities.push(activity);

            console.log("Activité ajoutée :", activity);
        }
    },

    getBeach(id) {
        return this.beaches.find(
            b => b.id === id
        );
    },

    getBeaches() {
        return this.beaches;
    }
};

module.exports = Beaches;// Système plages GTA

const Beaches = {
    beaches: [],

    addBeach(name, location) {
        const beach = {
            id: this.beaches.length + 1,
            name: name,
            location: location,
            activities: []
        };

        this.beaches.push(beach);

        console.log("Plage ajoutée :", beach);
        return beach;
    },

    addActivity(beachId, activity) {
        const beach = this.beaches.find(
            b => b.id === beachId
        );

        if (beach) {
            beach.activities.push(activity);

            console.log("Activité ajoutée :", activity);
        }
    },

    getBeach(id) {
        return this.beaches.find(
            b => b.id === id
        );
    },

    getBeaches() {
        return this.beaches;
    }
};

module.exports = Beaches;// Système plages GTA

const Beaches = {
    beaches: [],

    addBeach(name, location) {
        const beach = {
            id: this.beaches.length + 1,
            name: name,
            location: location,
            activities: []
        };

        this.beaches.push(beach);

        console.log("Plage ajoutée :", beach);
        return beach;
    },

    addActivity(beachId, activity) {
        const beach = this.beaches.find(
            b => b.id === beachId
        );

        if (beach) {
            beach.activities.push(activity);

            console.log("Activité ajoutée :", activity);
        }
    },

    getBeach(id) {
        return this.beaches.find(
            b => b.id === id
        );
    },

    getBeaches() {
        return this.beaches;
    }
};

module.exports = Beaches;