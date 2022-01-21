"use strict"

/**
 * class decorator
 * @param {Class} target
 * @returns {Class}
 */
function classDecorator(target) {
    Object.defineProperty(target, '_', { value: {}, configurable: false, enumerable: false });
    return target;
}

@classDecorator
class DemoClass { }

console.log(Object.getOwnPropertyDescriptors(DemoClass));
