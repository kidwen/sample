/** 节流 */
function throttle(fn, daly) {
    let timer;
    return function () {
        let _this = this;
        let ags = arguments;
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(_this, ags);
            timer = null;
        }, daly);
    }
}
