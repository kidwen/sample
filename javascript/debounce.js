/** 防抖 */
function debounce(fn, daly) {
    let timer;
    return function () {
        var _this = this;
        var ags = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(_this, ags);
        }, daly)
    }
}
