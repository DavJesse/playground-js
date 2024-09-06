export const getArchitects = () => {
    const architects = [];
    const nonArchitects = [];

    people.forEach(({ id, tag }) => {
        const personElmnt = document.getElementById(id);
        if (tag === 'a') {
            architects.push(personElmnt);
        } else {
            nonArchitects.push(personElmnt);
        }
    });
    return [architects, nonArchitects]
};

export const getClassical = () => {
    const classical = [];
    const nonClassical = [];

    people.forEach(({ id, classe }) => {
        const personElmnt = document.getElementById(id);
        if (classe === 'classical') {
            classical.push(personElmnt);
        } else {
            nonClassical.push(personElmnt)
        }
    });
    return [classical, nonClassical];
};

export const getActive = () => {
    const activeClassical = [];
    const nonActiveClassical = [];

    people.forEach(({ id, classe, active }) => {
        const personElmnt = document.getElementById(id);
        if (classe === 'classical' && active === true) {
            activeClassical.push(personElmnt);
        } else if (classe === 'classical' && active === false) {
            nonActiveClassical.push(personElmnt)
        }
    });
    return [activeClassical, nonActiveClassical];
};

export const getBonannoPisano = () => {
    let Bonanno = null;
    const restActiveClassical = [];

    people.forEach(({ id, classe, active }) => {
        const personEl = document.getElementById(id);
        if (id === 'BonannoPisano') {
            Bonanno = personEl;
        } else if (classe === 'classical' && active === true) {
            restActiveClassical.push(personEl)
        }
    });
    return [Bonanno, restActiveClassical]
};