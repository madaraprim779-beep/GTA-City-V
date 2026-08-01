// Système objectifs missions GTA

const Objectives = {
    objectives: [],

    addObjective(missionId, description) {
        const objective = {
            id: this.objectives.length + 1,
            missionId: missionId,
            description: description,
            completed: false
        };

        this.objectives.push(objective);

        console.log("Objectif ajouté :", objective);
        return objective;
    },

    completeObjective(id) {
        const objective = this.objectives.find(
            o => o.id === id
        );

        if (objective) {
            objective.completed = true;

            console.log(
                "Objectif terminé :",
                objective.description
            );
        }
    },

    getObjectives() {
        return this.objectives;
    }
};

module.exports = Objectives;