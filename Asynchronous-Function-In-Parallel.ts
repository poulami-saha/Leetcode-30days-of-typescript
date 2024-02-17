
// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

export type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    let results: T[] = [];
    let completedPromises = 0
    return new Promise((resolve, reject) => {
        functions.forEach((fn, index) => {
            fn().then(res => {
                results[index] = res;
                completedPromises++
                if (completedPromises === functions.length) {
                    resolve(results)
                }
            })
                .catch(err => reject(err))
        }
        )
        return results;
    })
}
const promise = promiseAll([() => new Promise(res => res(42))])
promise.then(console.log); // [42]