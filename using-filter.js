function filterShortStateName(arr) {
    return arr.filter(str => str.length > 7)
}

function filterStartVowel(arr) {
    const regex = /^[aeiou]/;
    return arr.filter(str => regex.test(str));
}

function filter5Vowels(arr) {
    const regex = /[aeiou]/g;

    function countMatches(str) {
        const match = str.match(regex)
        return match ? match.length : 0
    }
    return arr.filter(str => countMatches(str) >= 5);
}

function filterDistinctVowel(arr) {
    const regex = /[aeiou]g/

    if
}



console.log(filterShortStateName(['apple', 'banana', 'kiwi', 'blueberry', 'grape']))
console.log(filterStartVowel(['apple', 'banana', 'kiwi', 'blueberry', 'grape']))
console.log(filter5Vowels(['education', 'rhythm', 'aerial', 'supercalifragilisticexpialidocious', 'bcd']))