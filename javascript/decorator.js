"use strict"

function classDecorator(target) {
    console.log(Reflect.getOwnPropertyDescriptor(target, 'value'));
    target.prototype.writable = false;
    Object.defineProperty(target, '_', { value: {}, configurable: false, enumerable: false });
    return target;
}

@classDecorator
class DemoClass { }

console.log(Object.getOwnPropertyDescriptors(DemoClass));
