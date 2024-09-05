function filterShortStateName(arr) {
    return arr.filter(str => str.length < 7)
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

function multiFilter(arrObj) {
   return arrObj.filter(obj => {
    const vowels = /^[aeiou]/i;
    const containsVowel = /[aeiou]/i;

    return  obj.capital.length >= 8 &&
    !vowels.test(obj.name) &&
    containsVowel.test(obj.tag) &&
    obj.region !== "South";
   });
}



// console.log(filterShortStateName(['apple', 'banana', 'kiwi', 'blueberry', 'grape']))
// console.log(filterStartVowel(['apple', 'banana', 'kiwi', 'blueberry', 'grape']))
// console.log(filter5Vowels(['education', 'rhythm', 'aerial', 'supercalifragilisticexpialidocious', 'bcd']))
// console.log(filterDistinctVowel(['education', 'rhythm', 'aerial', 'supercalifragilisticexpialidocious', 'beauty']))
// console.log(multiFilter([
//     { capital: 'Washington', name: 'George', tag: 'leader', region: 'North' },
//     { capital: 'Atlanta', name: 'Andrew', tag: 'President', region: 'South' },
//     { capital: 'Sacramento', name: 'Mike', tag: 'Mayor', region: 'West' },
//     { capital: 'Philadelphia', name: 'Oscar', tag: 'actor', region: 'East' },
//     { capital: 'London', name: 'Igor', tag: 'CEO', region: 'South' }
// ]))