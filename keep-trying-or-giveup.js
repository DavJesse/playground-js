function retry(count = 3, callback = async () => {}) {
    return async function(...args) {
        try {
            const result = await callback(...args);
            return result;
        } catch (e) {
            if (count > 0) {
                return retry(count - 1, callback)(...args);
            } else {
                throw e;
            }
        }
    };
}

function timeout(delay = 0, callback = async() => {}) {
    return async function(...args) {
        const timeout = new Promise((resolve) =>
            setTimeout(resolve, delay, Error('timeout'))
        );
        const functionCall = new Promise((resolve) =>
            resolve(callback(...args))
        );
        const result = await Promise.race([timeout, functionCall]).then(
            (result) => result
        );
        if (result instanceof Error) {
            throw result;
        }
        return result;
    };
}