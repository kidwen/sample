"use strict"

function localeCompare(arr) {
    return arr.sort((pre, cur) => {
        return pre.name.localeCompare(cur.name);
    });
}

const arr = [{
    name: "张三"
}, {
    name: "张三ca"
}, {
    name: "张三ba"
}, {
    name: "张三一"
}, {
    name: "张三二"
}, {
    name: "张散"
}, {
    name: "张散a"
}];

console.log(localeCompare(arr));
