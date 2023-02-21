'use strict'

const arr = [2, 6, 0, 1, 3, 110];

function getMaxWay(arr) {
    let result = 1;
    let tag = true
    for (let index = 0; index < arr.length; index++) {
        const iValue = arr[index];
        tag = true;
        for (let j = index + 1; j < arr.length; j++) {
            const jValue = arr[j];
            if (jValue < arr[j - 1] || !tag) {
                tag = false;
                continue;
            }
            if (jValue > iValue) {
                let num = jValue - iValue + 1;
                result = result > num ? result : num;
            }
        }
    }
    return result;
}

console.log(getMaxWay(arr));

function getMaxLen(arr) {
    const len = arr.length
    let maxGap = 0
    for (let i = 0; i < len; i++) {
        let right = i
        let left = i
        let rightFlag = true
        let leftFlag = true
        // 左指针
        while (leftFlag) {
            // 移动左双指针，符合条件结束
            if (arr[left - 1] < arr[left] || left === 0) {
                leftFlag = false
            }
            // 右指针
            while (rightFlag) {
                // 移动右双指针，符合条件结束
                if (arr[right] > arr[right + 1] || right === len - 1) {
                    rightFlag = false
                }
                let diff = arr[right] - arr[left]
                maxGap = diff > maxGap ? diff : maxGap
                right++
            }
            left--
        }
    }
    return maxGap + 1
}

const a = getMaxLen(arr)
console.log('result ', a)
