// Téléphone du joueur GTA

const PlayerPhone = {
    contacts: [],
    calls: [],
    messages: [],

    addContact(name, number) {
        const contact = {
            id: this.contacts.length + 1,
            name: name,
            number: number
        };

        this.contacts.push(contact);

        console.log("Contact ajouté :", contact);
    },

    sendMessage(contact, message) {
        const msg = {
            to: contact,
            text: message
        };

        this.messages.push(msg);

        console.log("Message envoyé :", msg);
    },

    call(number) {
        this.calls.push(number);

        console.log("Appel vers :", number);
    },

    getPhone() {
        return {
            contacts: this.contacts,
            messages: this.messages,
            calls: this.calls
        };
    }
};

module.exports = PlayerPhone;