function sameAmount(str, regx1, regx2) {
    if (regx1.test(str) && regx2.test(str)) {
        return true
    } else {
        return false
    }
}

// console.log(sameAount('Hello world', /^[hH]ello/, /world$/ ))