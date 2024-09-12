function replica(target, ...sources) {
    // Check if the target is an object or array
    if (typeof target !== 'object' || target === null) {
        throw new Error('Target must be a non-null object');
    }

    // Loop through each source object
    sources.forEach(source => {
        if (typeof source !== 'object' || source === null) {
            return; // Skip non-object sources
        }

        // Iterate through each key-value pair in the source
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                const sourceValue = source[key];

                // If the value is an object or array, we need to recurse
                if (typeof sourceValue === 'object' && sourceValue !== null) {
                    // Ensure the target has an object or array to merge into
                    if (Array.isArray(sourceValue)) {
                        target[key] = Array.isArray(target[key]) ? target[key] : [];
                    } else {
                        target[key] = typeof target[key] === 'object' && target[key] !== null ? target[key] : {};
                    }
                    // Recursive deep merge for nested objects/arrays
                    replica(target[key], sourceValue);
                } else {
                    // Primitive values are directly assigned
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
