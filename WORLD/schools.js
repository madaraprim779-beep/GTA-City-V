// Système écoles GTA

const Schools = {
    schools: [],

    addSchool(name, location, type) {
        const school = {
            id: this.schools.length + 1,
            name: name,
            location: location,
            type: type,
            students: 0
        };

        this.schools.push(school);

        console.log("École ajoutée :", school);
        return school;
    },

    addStudents(id, amount) {
        const school = this.schools.find(
            s => s.id === id
        );

        if (school) {
            school.students += amount;

            console.log(
                "Élèves ajoutés :",
                amount
            );
        }
    },

    getSchools() {
        return this.schools;
    }
};

module.exports = Schools;