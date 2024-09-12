function debounce(func, delay) {
    let timeOut;
    return function(...args) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => func.apply(this, args), delay)
    };
}

function opDebounce(func, delay, option = {}) {
    let timeOut;

    return function(...args) {
        function later() {
            timeOut = null;
            if (!option.leading) func.apply(this, args);
        };

        clearTimeout(timeOut);
        timeOut = setTimeout(later, delay)

        if (option.leading && !timeOut) func.apply(this, args)

    };
}

//opDebounce()