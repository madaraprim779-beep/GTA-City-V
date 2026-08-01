// Activités des plages GTA

const BeachesActivities = {
    activities: [],

    addActivity(name, beach, reward) {
        const activity = {
            id: this.activities.length + 1,
            name: name,
            beach: beach,
            reward: reward
        };

        this.activities.push(activity);

        console.log("Activité ajoutée :", activity);
        return activity;
    },

    startActivity(id) {
        const activity = this.activities.find(
            a => a.id === id
        );

        if (activity) {
            console.log(
                "Activité commencée :",
                activity.name
            );
        }
    },

    finishActivity(id) {
        const activity = this.activities.find(
            a => a.id === id
        );

        if (activity) {
            console.log(
                "Activité terminée :",
                activity.reward
            );
        }
    },

    getActivities() {
        return this.activities;
    }
};

module.exports = BeachesActivities;