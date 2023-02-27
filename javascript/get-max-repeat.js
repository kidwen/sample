'use strict'

const arr = [1, 1, 1, 2, 3, 3, 3, 3, 3, 2, 2];

let result = 1;
let count = 1;

arr.reduce((pre, cur) => {
    if (pre === cur) {
        count += 1;
    } else {
        result = result > count ? result : count;
        count = 1;
    }
    return cur;
});

console.log(result);
