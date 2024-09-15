function all(obj) {
    const keys = Object.keys(obj);
    const promises = Object.values(obj);

    return new Promise((resolve, reject) => {
        Promise.all(promises).then(results => {
            const resolvObj = {};
            keys.forEach((key, index) => {
                resolvObj[key] = results[index];
            });
            resolve(resolvObj);
        })
        .catch(reject);
    });
}