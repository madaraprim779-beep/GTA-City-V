// Système histoire GTA

const Stories = {
    chapters: [],

    addChapter(title, description, missions) {
        const chapter = {
            id: this.chapters.length + 1,
            title: title,
            description: description,
            missions: missions,
            completed: false
        };

        this.chapters.push(chapter);

        console.log("Chapitre ajouté :", chapter);
        return chapter;
    },

    completeChapter(id) {
        const chapter = this.chapters.find(
            c => c.id === id
        );

        if (chapter) {
            chapter.completed = true;

            console.log(
                "Chapitre terminé :",
                chapter.title
            );
        }
    },

    getStories() {
        return this.chapters;
    }
};

module.exports = Stories;