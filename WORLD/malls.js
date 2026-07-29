// Système centres commerciaux GTA

const Malls = {
    malls: [],

    addMall(name, location, shops) {
        const mall = {
            id: this.malls.length + 1,
            name: name,
            location: location,
            shops: shops,
            visitors: 0
        };

        this.malls.push(mall);

        console.log("Centre commercial ajouté :", mall);
        return mall;
    },

    addVisitor(id) {
        const mall = this.malls.find(
            m => m.id === id
        );

        if (mall) {
            mall.visitors++;

            console.log(
                "Visiteur ajouté :",
                mall.name
            );
        }
    },

    getMalls() {
        return this.malls;
    }
};

module.exports = Malls;