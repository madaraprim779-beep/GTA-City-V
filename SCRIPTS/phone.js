// Système téléphone GTA

const Phone = {
    contacts: [],
    messages: [],

    addContact(name, number) {
        const contact = {
            id: this.contacts.length + 1,
            name: name,
            number: number
        };

        this.contacts.push(contact);

        console.log("Contact ajouté :", contact);
        return contact;
    },

    sendMessage(number, text) {
        const message = {
            to: number,
            text: text,
            date: new Date()
        };

        this.messages.push(message);

        console.log("Message envoyé :", message);
    },

    getContacts() {
        return this.contacts;
    },

    getMessages() {
        return this.messages;
    }
};

module.exports = Phone;