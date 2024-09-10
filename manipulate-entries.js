function filterEntries(obj, func) {
    let result = {};

    for (const [key, value] of Object.entries(obj)) {
        if (func(key, value)) {
            result[key] = value;
        }
    }
    return result;
}

function mapEntries(obj, func) {
    let result = {};

    for (const [key, value] of Object.entries(obj)) {
        const [newKey, newValue] = func(key, value);
        result[newKey] = newValue;
    }
    return result;
}

function reduceEntries(obj, func, initialValue) {
    let accumulator = initialValue === undefined? Object.values(obj)[0] : initialValue;

    for (const [key, value] of Object.entries(obj)) {
        accumulator = func(accumulator, key, value);
    }

    return accumulator;
}

function totalCalories(obj) {
    return reduceEntries(obj, (total, _, calories) => total + calories, 0);
}

function lowCarbs(obj) {
    return filterEntries(obj, (_, calories) => calories <= 500);
}