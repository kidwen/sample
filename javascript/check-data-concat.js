function check(a, b) {
    if (!a || !b || a.length < b.length) {
        return false;
    }
    for (let i = 0; i <= b.length - 1; i++) {
        if (a.indexOf(b[i]) == -1) {
            return false;
        }
        check(a.slice(a.indexOf(b[i]), a.length - 1), b.slice(i, b.length - 1));
    }
    return true;
}

console.log("function1", check("aeebffcss", "abc"));

function check2(a, b) {
    if (!a || !b || a.length < b.length) {
        return false;
    }
    let arr = Array.from(b);
    while (arr.length) {
        let index = a.indexOf(arr[0]);
        if (index == -1) {
            return false;
        }
        a = a.slice(index, a.length);
        arr.shift();
    }
    return true;
}

console.log("function2", check2("aeebffcss", "abc"));
