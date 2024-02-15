//Given a function fn, return a memoized version of that function.

//A memoized function is a function that will never be called twice with the same inputs. 
//Instead it will return a cached value.

export type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = new Map<string, number>();
    return function (...args: number[]) {
        const argsToString = JSON.stringify(args);
        const existingResult: undefined | number = cache.get(argsToString);
        if (existingResult === undefined) {
            // @ts-ignore: 'this' implicitly has type 'any' because it does not have a type annotation.
            const result = fn.apply(this, args);
            cache.set(argsToString, result);
            return result;
        } else {
            return existingResult;
        }
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
