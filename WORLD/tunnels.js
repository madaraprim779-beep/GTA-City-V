// Système tunnels GTA

const Tunnels = {
    tunnels: [],

    addTunnel(name, location, length) {
        const tunnel = {
            id: this.tunnels.length + 1,
            name: name,
            location: location,
            length: length,
            lighting: true
        };

        this.tunnels.push(tunnel);

        console.log("Tunnel ajouté :", tunnel);
        return tunnel;
    },

    setLighting(id, enabled) {
        const tunnel = this.tunnels.find(
            t => t.id === id
        );

        if (tunnel) {
            tunnel.lighting = enabled;

            console.log(
                "Éclairage du tunnel :",
                enabled ? "activé" : "désactivé"
            );
        }
    },

    getTunnel(id) {
        return this.tunnels.find(
            t => t.id === id
        );
    },

    getTunnels() {
        return this.tunnels;
    }
};

module.exports = Tunnels;