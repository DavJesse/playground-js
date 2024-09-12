function replica(target, ...sources) {
    if (typeof target !== 'object' || target === null) {
        throw new Error('Target must be a non-null object');
    }

    sources.forEach(source => {
        if (typeof source !== 'object' || source === null) {
            return;
        }

        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                const sourceValue = source[key];

                // Handle special object types
                if (sourceValue instanceof RegExp) {
                    target[key] = new RegExp(sourceValue); // Copy RegExp
                } else if (sourceValue instanceof Date) {
                    target[key] = new Date(sourceValue.getTime()); // Copy Date
                } else if (typeof sourceValue === 'function') {
                    target[key] = sourceValue; // Directly assign functions
                }
                // Handle objects and arrays
                else if (typeof sourceValue === 'object' && sourceValue !== null) {
                    if (Array.isArray(sourceValue)) {
                        target[key] = Array.isArray(target[key]) ? target[key] : [];
                    } else {
                        target[key] = typeof target[key] === 'object' && target[key] !== null ? target[key] : {};
                    }
                    replica(target[key], sourceValue);
                } else {
                    // Directly assign primitive values
                    target[key] = sourceValue;
                }
            }
        }
    });

    return target;
}


// const target = { a: 1, b: { x: 1 } };
// const source1 = { b: { y: 2 }, c: 3 };
// const source2 = { b: { z: 3 }, d: 4 };

// const result = replica(target, source1, source2);

// console.log(result);
