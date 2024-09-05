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

    function hasDistinct(str) {
        const regex = /[aeiou]/g
        const matches = str.match(regex);
    
        if (!matches) return false;

        const uniqueVowels = new Set(matches);

        return uniqueVowels.size === matches.length;
    }

    return arr.filter(hasDistinct);
    
}



// console.log(filterShortStateName(['apple', 'banana', 'kiwi', 'blueberry', 'grape']))
// console.log(filterStartVowel(['apple', 'banana', 'kiwi', 'blueberry', 'grape']))
// console.log(filter5Vowels(['education', 'rhythm', 'aerial', 'supercalifragilisticexpialidocious', 'bcd']))
// console.log(filterDistinctVowel(['education', 'rhythm', 'aerial', 'supercalifragilisticexpialidocious', 'beauty']))