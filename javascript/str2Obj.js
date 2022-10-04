'use strict'

function str2Obj(str) {
    let result = {};
    const arr = str.split('&');
    for (const iterator of arr) {
        const keyValueArr = iterator.split('=');
        result[keyValueArr[0]] = isNaN(keyValueArr[1]) ? keyValueArr[1] : Number(keyValueArr[1])
    }
    return result;
}


console.log(str2Obj('x=1&y=2&foo=bar'));
