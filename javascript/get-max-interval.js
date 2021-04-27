"use strict";

function solution(A) {
    A.sort((a, b) => a - b);
    let max = 0;
    for (let index = 0; index < A.length - 1; index++) {
        let a = A[index + 1] - A[index];
        if (a > max) {
            max = a;
        }
    }
    return Math.floor(max / 2);
}

console.log(solution([10, 0, 8, 2, -1, 12, 11, 3]));
