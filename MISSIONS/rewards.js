// Système récompenses missions GTA

const Rewards = {
    rewards: [],

    addReward(missionId, money, xp, item) {
        const reward = {
            id: this.rewards.length + 1,
            missionId: missionId,
            money: money,
            xp: xp,
            item: item
        };

        this.rewards.push(reward);

        console.log("Récompense ajoutée :", reward);
        return reward;
    },

    giveReward(id, player) {
        const reward = this.rewards.find(
            r => r.id === id
        );

        if (reward) {
            player.money += reward.money;
            player.xp += reward.xp;

            console.log(
                "Récompense donnée :",
                reward
            );
        }
    },

    getRewards() {
        return this.rewards;
    }
};

module.exports = Rewards;