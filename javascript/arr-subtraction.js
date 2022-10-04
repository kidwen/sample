'use strict'

function arrSubtraction(arr) {
    let result = arr[0] instanceof Array ? arrSubtraction(arr[0]) : arr[0];
    arr.shift();
    for (const iterator of arr) {
        if (iterator instanceof Array) {
            result -= arrSubtraction(iterator);
        } else {
            result -= iterator;
        }
    }
    return result;
}

console.log(arrSubtraction([5, [[4, 3], 2, 1]]));
