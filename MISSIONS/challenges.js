// Système défis GTA

const Challenges = {
    challenges: [],

    addChallenge(name, objective, reward) {
        const challenge = {
            id: this.challenges.length + 1,
            name: name,
            objective: objective,
            reward: reward,
            completed: false
        };

        this.challenges.push(challenge);

        console.log("Défi ajouté :", challenge);
        return challenge;
    },

    startChallenge(id) {
        const challenge = this.challenges.find(
            c => c.id === id
        );

        if (challenge) {
            console.log(
                "Défi commencé :",
                challenge.name
            );
        }
    },

    completeChallenge(id) {
        const challenge = this.challenges.find(
            c => c.id === id
        );

        if (challenge) {
            challenge.completed = true;

            console.log(
                "Défi terminé :",
                challenge.name
            );
        }
    },

    getChallenges() {
        return this.challenges;
    }
};

module.exports = Challenges;