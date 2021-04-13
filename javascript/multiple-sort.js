"use strict";
function multipleSort(data, sorts) {
    if (!sorts || sorts.length == 0) {
        return data;
    }
    return data.sort((cur, next) => {
        for (const sort of sorts) {
            let key = sort.key;
            let order = sort.order;
            if (next[key] == cur[key]) {
                continue;
            }
            if (order == "desc") {
                return cur[key] > next[key] ? -1 : 1;
            } else {
                return cur[key] > next[key] ? 1 : -1;
            }
        }
    });
}

let data = [
    {
        a: 1,
        b: "a",
    },
    {
        a: 2,
        b: "d",
    },
    {
        a: 2,
        b: "c",
        c: 10,
    },
    {
        a: 2,
        b: "a",
    },
    {
        a: 2,
        b: "c",
        c: 11,
    },
];
let sorts = [
    {
        key: "a",
        order: "desc",
    },
    {
        key: "b",
        order: "asc",
    },
    {
        key: "c",
        order: "desc",
    },
];

console.log(multipleSort(data, sorts));
