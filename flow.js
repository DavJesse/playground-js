function flow(functions) {
    return function(...args) {
      return functions.reduce((acc, func) => {
        // Apply the function with the arguments spread
        return func(...acc);
      }, args);
    };
  }
  
  // Example functions
  const square = (nbr) => nbr * nbr;
  const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2;
  
  // Create a composed function
  const flowedFunctions = flow([add2Numbers, square]);
  
  // Use the composed function
  console.log(flowedFunctions(2, 3)); // Output: 25
  