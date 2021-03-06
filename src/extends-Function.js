(() => {
    'use strict';

    const isFunction = (obj) => '[object Function]' === Object.prototype.toString.call(obj);

    if (!isFunction(Function.debounce)) {
        Object.defineProperty(Function, 'debounce', {
            value: function (fn, wait) {
                wait = +wait || 0;
                if (wait < 0) throw 'The value of wait must be greater than zero.';

                let timer = null;
                return function () {
                    const args = arguments,
                        context = this;

                    if (!!timer) {
                        clearTimeout(timer);

                        timer = setTimeout(function () {
                            fn.apply(context, args);
                        }, +wait);
                    } else {
                        timer = setTimeout(function () {
                            fn.apply(context, args);
                        }, +wait);
                    }
                };
            },
            enumerable: false,
            configurable: false,
        });
    }

    if (!isFunction(Function.throttle)) {
        Object.defineProperty(Function, 'throttle', {
            value: function (fn, wait) {
                wait = +wait || 0;
                if (wait < 0) throw 'The value of wait must be greater than zero.';

                let timer = null,
                    remaining = 0, // eslint-disable-line no-unused-vars
                    previous = new Date();

                return function () {
                    let now = new Date(),
                        remaining = now - previous;
                    const args = arguments,
                        context = this;

                    if (remaining >= wait) {
                        if (!!timer) {
                            clearTimeout(timer);
                        }

                        fn.apply(context, args);
                        previous = now;
                    } else {
                        if (!timer) {
                            timer = setTimeout(function () {
                                fn.apply(context, args);
                                previous = new Date();
                            }, wait - remaining);
                        }
                    }
                };
            },
            enumerable: false,
            configurable: false,
        });
    }
})();
