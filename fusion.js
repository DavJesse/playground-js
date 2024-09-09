function fusion(obj1, obj2) {
    const result = {}
    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)])
    
    allKeys.forEach(key => {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { 
                result[key] = [...obj1[key], ...(obj2[key])]
            } else if (typeof obj1[key] === 'string' && typeof obj2[key] === 'string') {
                result[key] = obj1[key] + ' ' + obj2[key];
            } else if (typeof obj1[key] === 'number' && typeof obj2[key] === 'number') {
                result[key] = `${obj1[key] + obj2[key]}`
            }
        } else if (obj1.hasOwnProperty(key)) {
            result[key] = obj1[key]
        } else if (obj2.hasOwnProperty(key)) {
            result[key] = obj2[key]
        }
    });
    return result
}

// Example usage
// const obj1 = { a: 'Hello', b: 1 , c: ['Foo', 'tah'] };
// const obj2 = { b: 2, c: ['Bar', 'lah'], d: 'Baz' };

// //const fused = fuseObjects(obj1, obj2);
// fusion(obj1, obj2)
// console.log(fusion(obj1, obj2));

console.log(fusion({ arr: [1, "2"] }, { arr: [2] }))
console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));
// console.log(fusion());
// console.log(fusion());
// console.log(fusion());