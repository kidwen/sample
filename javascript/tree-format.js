"use strict";
// 转换为树状格式
function convert_format(data) {
    // tree 是转换后的结果
    let tree = {};
    if (data.length == 0) {
        return tree;
    }
    let result = convert(data);
    tree = format(result);
    return tree;
}

function convert(data, parent_id) {
    let result = [];
    var temp;
    for (let i = 0; i < data.length; i++) {
        if (data[i].parent_id == parent_id) {
            var obj = data[i];
            temp = convert(data, obj.name);
            if (temp.length > 0) {
                obj.children = temp;
            }
            result.push(obj);
        }
    }
    return result;
}

function format(result) {
    let tree = {};
    if (!result) {
        return tree;
    }
    for (const iterator of result) {
        tree[iterator.name] = format(iterator.children);
    }
    return tree;
}

let identity_list = [
    {
        parent_id: "女装",
        name: "连衣裙",
    },
    {
        name: "女装",
    },
    {
        parent_id: "女装",
        name: "半身裙",
    },
    {
        name: "数码",
    },
    {
        parent_id: "数码",
        name: "电脑配件",
    },
    {
        parent_id: "电脑配件",
        name: "内存条",
    },
];
console.log(convert_format(identity_list));
