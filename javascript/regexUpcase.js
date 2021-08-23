'use strict';

/**
 *
 * @param {string} _ - the regex match string
 * @param {string} letter - the regex catch string
 * @returns {string} the regex catch string to camel case
 */
function upper(_, letter) {
    return letter.toUpperCase();
}

console.log("user_id".replace(/_+(\w)/g, upper));
