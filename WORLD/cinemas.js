// Système cinémas GTA

const Cinemas = {
    cinemas: [],

    addCinema(name, location, movies) {
        const cinema = {
            id: this.cinemas.length + 1,
            name: name,
            location: location,
            movies: movies,
            viewers: 0
        };

        this.cinemas.push(cinema);

        console.log("Cinéma ajouté :", cinema);
        return cinema;
    },

    watchMovie(id, movie) {
        const cinema = this.cinemas.find(
            c => c.id === id
        );

        if (cinema && cinema.movies.includes(movie)) {
            cinema.viewers++;

            console.log(
                "Film regardé :",
                movie
            );
        }
    },

    getCinemas() {
        return this.cinemas;
    }
};

module.exports = Cinemas;