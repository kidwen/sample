'use strict';

function upper(all, letter) {
    return letter.toUpperCase();
}

console.log("user_id".replace(/_+(\w)/g, upper));
