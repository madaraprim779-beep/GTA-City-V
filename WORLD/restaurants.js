// Système restaurants GTA

const Restaurants = {
    restaurants: [],

    addRestaurant(name, location, menu) {
        const restaurant = {
            id: this.restaurants.length + 1,
            name: name,
            location: location,
            menu: menu,
            customers: 0
        };

        this.restaurants.push(restaurant);

        console.log("Restaurant ajouté :", restaurant);
        return restaurant;
    },

    orderFood(id, food) {
        const restaurant = this.restaurants.find(
            r => r.id === id
        );

        if (restaurant && restaurant.menu.includes(food)) {
            restaurant.customers++;

            console.log(
                "Commande passée :",
                food
            );
        }
    },

    getRestaurants() {
        return this.restaurants;
    }
};

module.exports = Restaurants;