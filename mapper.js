function map(arr, func) {
    const result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            result.push(func(arr[i], i, arr))
        }
    }
    return result;
}

function flatMap(arr, func) {
    const result = []
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            const processed = func(arr[i], i, arr)
            
            if (Array.isArray(processed)) {
                for (let j = 0; j < processed.length; j++) {
                    result.push(processed[j])
                }
            } else {
                result.push(processed);
            }
        }
    }
    return result;
}

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];
// const names = map(users, user => user.name);
// console.log(names);

// const sentences = ['Hello world', 'How are you'];
// const words = flatMap(sentences, sentence => sentence.split(' '));
// console.log(words);