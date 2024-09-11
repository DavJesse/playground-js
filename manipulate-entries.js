function filterEntries(obj, func) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (func([key, value])) {
            result[key] = value;
        }
    }
    return result;
}

function mapEntries(obj, func) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        const [newKey, newValue] = func([key, value])
        result[newKey] = newValue;

    }
    return result;
}

function reduceEntries(obj, func, initial) {
    const entries = Object.entries(obj);
    let acc, start;
    if (initial === undefined) {
        if (entries.length === 0) return undefined;
        acc = entries[0][1];
        start = 1;
    } else {
        acc = initial;
        start = 0;
    }
    for (let i = start; i < entries.length; i++) {
        acc = func(acc, entries[i]);
    }
    return acc;
}

function totalCalories(obj) {
    return Number(reduceEntries(obj, (total, [item, amount]) => total + nutritionDB[item].calories * amount/100, 0).toFixed(1));
}

function lowCarbs(obj) {
    return filterEntries(obj, ([item, amount]) =>
    nutritionDB[item].carbss * amount / 100 < 50);
}

function cartTotal(obj) {
    return mapEntries(obj, ([item, amount]) => {
        const itemTotal = {};
        for (const nutrient in nutritionDB[item]) {
            itemTotal[nutrient] = Number((nutritionDB[item][nutrient] * amount / 100).toFixed(3));
        }
        return [item, itemTotal];
    });
}

// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
//   }

//   const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))
