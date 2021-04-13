// 生成器从创建(执行)，不断入栈出栈(全局环境上下文)，但是因为一直有对生成器的引用所以不会销毁

function* generator(val) {
    console.log(val);
    let a = yield "A";
    console.log(a);
    return "B";
}

let g = generator("传入默认值");

let firstResult = g.next("第一次调用生成器函数");
console.log("第一次调用返回值", firstResult);
let secondResult = g.next("第二次调用才会将值传入");
console.log("第二次调用返回值", secondResult);

