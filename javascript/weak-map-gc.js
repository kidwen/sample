"use strict"

global.gc();

function usedSize() {
    const used = process.memoryUsage().heapUsed;
    return Math.round((used / 1024 / 1024) * 100) / 100 + 'M';
}

// 3.11M
console.log(usedSize());

var b = new Array(5 * 1024 * 1024);

// var map = new Map();
// map.set(b, 1);

var weakMap = new WeakMap();
weakMap.set(b, {});

global.gc();

// 43.11M
console.log(usedSize());

b = null;
global.gc();

// 3.11M
console.log(usedSize());
