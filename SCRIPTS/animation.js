// Système animation GTA

const Animation = {
    current: null,
    animations: [],

    addAnimation(name, type) {
        const animation = {
            id: this.animations.length + 1,
            name: name,
            type: type
        };

        this.animations.push(animation);

        console.log("Animation ajoutée :", animation);
        return animation;
    },

    play(name) {
        this.current = name;

        console.log("Animation jouée :", name);
    },

    stop() {
        this.current = null;

        console.log("Animation arrêtée");
    },

    getCurrent() {
        return this.current;
    }
};

module.exports = Animation;