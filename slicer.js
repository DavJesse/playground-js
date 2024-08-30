function slice(arr, start, end=arr.length) {
    let result;

    if (typeof arr === 'string') {
        result = ''
    } else {
        result = [];
    };

    if (end < start) {
        return result
    }
    
    if (start < 0 || end < 0) {
        if (start < 0) {
            start += arr.length;
            
            if (start < 0) {
                start = 0;
            };
        };
        
        if (end < 0) {
            end += arr.length;
             
             if (end < 0) {
                end = 0;
            };
        };           
    };


    while (start < end) {
        result = result.concat(arr[start]);
        start++;
    }
    return result
}

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//console.log(slice(fruits, -3, -1))
// console.log(slice(fruits, -1, -3))
// console.log(slice(fruits, 3))
// console.log(slice(fruits, -1, 1))
// console.log(slice(fruits, 10))