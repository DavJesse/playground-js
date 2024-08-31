const vowels = /[aeiouAEIOU]/;

function vowelDots(str) {
    let result = '';

    for (let i = 0;  i < str.length; i++) {
        if (vowels.test(str[i])) {
            result += str[i] + '.';
        } else {
            result += str[i];
        }
    }
    return result
}

// console.log(vowelDots('The quick brown fox'))