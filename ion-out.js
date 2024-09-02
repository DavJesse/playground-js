function ionOut(str) {
    const regx = /\b\w+tion\w*/g;
    return (str.match(regx) || []).map(word => {
        const tIndex = word.lastIndexOf('tion');
        return word.slice(0, tIndex+1) + word.slice(tIndex + 4);
    });
}

// console.log(ionOut('attention, direction, friction, precaution, sanction, station'));
// console.log(ionOut('My affiliation to the gangsta nation, captionate'));
// console.log(ionOut('No matching words here'));
// console.log(ionOut('rationalize, emotional, cautionary'));