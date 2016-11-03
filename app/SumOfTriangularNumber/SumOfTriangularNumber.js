/**
 * https://www.codewars.com/kata/sum-of-triangular-numbers/typescript
 */
"use strict";
function sumTriangularNumbers(n) {
    var result = 0, last = 0;
    for (var i = 1; i <= n; i++) {
        result += (last += i);
    }
    return result;
}
exports.sumTriangularNumbers = sumTriangularNumbers;
