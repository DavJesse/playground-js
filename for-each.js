function forEach(arr, func) {
   for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
   } 
}

// const result = []
// const returned = forEach(arr, value => result.push(value))

// console.log(result)