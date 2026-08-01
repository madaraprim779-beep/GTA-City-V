// Système checkpoints missions GTA

const Checkpoints = {
    checkpoints: [],

    addCheckpoint(missionId, location, type) {
        const checkpoint = {
            id: this.checkpoints.length + 1,
            missionId: missionId,
            location: location,
            type: type,
            reached: false
        };

        this.checkpoints.push(checkpoint);

        console.log("Checkpoint ajouté :", checkpoint);
        return checkpoint;
    },

    reachCheckpoint(id) {
        const checkpoint = this.checkpoints.find(
            c => c.id === id
        );

        if (checkpoint) {
            checkpoint.reached = true;

            console.log(
                "Checkpoint atteint :",
                checkpoint.location
            );
        }
    },

    getCheckpoints() {
        return this.checkpoints;
    }
};

module.exports = Checkpoints;