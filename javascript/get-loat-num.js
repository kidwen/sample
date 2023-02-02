"use strict";

function getLost(arr) {
    if (arr.length < 28) return -1;
    const newListLength = new Set(arr).size;
    if (newListLength != 28) return -1;
    let all = []
    for (let j = 0; j < 30; j++) {
        all.push(j + 1);
    }
    const result = [];
    for (let i = 0; i < all.length; i++) {
        const a = all[i];
        if (!arr.some(item => item == a)) {
            result.push(a)
        }
    }
    return result;
}
const arr = [1, 3, 4, 6, 7, 8, 9, 10];
console.log(getLost(arr));


const str = 'I am a boy'

function translate(str) {
    const arr = str.split(' ');
    const result = arr.reverse().join(' ');
    return result;
}

console.log(translate(str));
