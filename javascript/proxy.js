'use strict'

const handler = {
    get (obj, prop) {
        return prop in obj ? obj[prop] : 0;
    }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);
console.log('c' in p, p.c);
