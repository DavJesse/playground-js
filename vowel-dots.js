function vowelDots(str) {
    let result = '';
    const vowels = /[aeiouAEIOU]/;

    for (let i = 0;  i < str.length; i++) {
        if (vowel.test(str[i])) {
            result += str[i] + '.';
        } else {
            result += str[i];
        }
    }
    return result
}

// console.log(vowelDots('The quick brown fox'))