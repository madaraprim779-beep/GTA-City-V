// Système hôtels GTA

const Hotels = {
    hotels: [],

    addHotel(name, location, rooms) {
        const hotel = {
            id: this.hotels.length + 1,
            name: name,
            location: location,
            rooms: rooms,
            guests: 0
        };

        this.hotels.push(hotel);

        console.log("Hôtel ajouté :", hotel);
        return hotel;
    },

    bookRoom(id) {
        const hotel = this.hotels.find(
            h => h.id === id
        );

        if (hotel && hotel.guests < hotel.rooms) {
            hotel.guests++;

            console.log(
                "Chambre réservée dans :",
                hotel.name
            );
        }
    },

    getHotels() {
        return this.hotels;
    }
};

module.exports = Hotels;