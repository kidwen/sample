"use strict";


function solution(S, K) {
    let arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let start = arr.findIndex(a => a === S);
    if (start !== -1) {
        let num = (start + K) % 7;
        return arr[num];
    }
    return undefined;
}

console.log(solution('Sat', 22));
