function sameAmount(str, regx1, regx2) {
    const globalRegex1 = new RegExp(regx1, 'g');
    const globalRegex2 = new RegExp(regx2, 'g');

    const matches1 = (str.match(globalRegex1) || []).length;
    const matches2 = (str.match(globalRegex2) || []).length;

    return matches1 === matches2;
}

console.log(sameAmount('Hello world', /^[hH]ello/, /world$/ ))