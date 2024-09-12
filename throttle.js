function throttle(func, delay) {
    let wait = false;
    let waitArgs;
    const timeOutFunc = () => {
        if (waitArgs == null) {
            wait = false
        } else {
            func(...waitArgs)
            waitArgs = null
            setTimeout(timeOutFunc, delay)
        }
    }

    return function(...args) {
        if (wait) {
            waitArgs = args
            return
        }

        func(...args)
        wait = true

        setTimeout(timeOutFunc, delay)
    }
}

function opThrottle(func, delay, options = {}) {
    let timeout, waitArgs, lastThis;
    let previous = 0;
    const timeoutFunc = () => {
        previous = options.leading === false ? 0 : Date.now()
        timeout = null;

        if (waitArgs) {
            func.apply(lastThis, waitArgs);
            waitArgs = lastThis = null;
        }
    };

    return function(...args) {
        const now = Date.now();
        if (!previous && options.leading === false) {
            previous = now
        }

        const remaining = delay - (now - previous)
        waitArgs = args;
        lastThis = this;

        if (remaining <= 0 || remaining > delay) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(this, args);
        } else if (!timeout && options.trailing != false) {
            timeout = setTimeout(timeoutFunc, remaining)
        }
    };
}

// function basicTestThrottle() {
//     const throttledFunc = throttle(() => console.log('Throttled!'), 2000);

//     console.log("Starting test for throttle...");

//     // Invoke multiple times in quick succession
//     throttledFunc();
//     throttledFunc();
//     throttledFunc();

//     // Should only log 'Throttled!' immediately once, 
//     // then once again after 2 seconds if another call is made
//     setTimeout(() => throttledFunc(), 2500);  // After 2.5s
//     setTimeout(() => throttledFunc(), 3000);  // After 3s
// }

// // Call the test function
// basicTestThrottle();