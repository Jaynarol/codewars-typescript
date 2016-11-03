/**
 * https://www.codewars.com/kata/sum-of-triangular-numbers/typescript
 */

export function sumTriangularNumbers(n:number):number {
    let result = 0, last = 0;
    for (let i = 1; i <= n; i++) {
        result += (last += i);
    }
    return result;
}