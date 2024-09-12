function debounce(func, delay, leading = false) {

    let time;
    let isFirstCall = true
    return function(...args) {
        if (isFirstCall && leading) {
            isFirstCall = false;
            return func.apply(this, args);
        }
        clearTimeout(time);
        time = setTimeout(() => {
            func.apply(this, args);
            isFirstCall = true;
        }, delay)
        return undefined;
    }

}

function opDebounce() {
    let counter = 0;
    const increment = () => {
        counter++
        console.log(counter)
    };
    const debouncedIncrement = debounce(increment, 750, true);

    debouncedIncrement();
    debouncedIncrement();
    debouncedIncrement();
    setTimeout(debouncedIncrement, 1500);
    setTimeout(debouncedIncrement, 2000);
}

opDebounce()