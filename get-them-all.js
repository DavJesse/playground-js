function getArchitects() {
    const architects = [];
    const nonArchitects = [];

    people.forEach(({id, tag}) => {
        const personElmnt = document.getElementById(id);
        if (tag === 'a') {
            architects.push(personElmnt);
        } else {
            nonArchitects.push(personElmnt);
        }
    });
    return [architects, nonArchitects]
}