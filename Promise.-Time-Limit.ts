//Given an asynchronous function fn and a time t in milliseconds, 
//return a new time limited version of the input function. 
//fn takes arguments provided to the time limited function.

//The time limited function should follow these rules:

//If the fn completes within the time limit of t milliseconds, 
//the time limited function should resolve with the result.
//If the execution of the fn exceeds the time limit, the time limited 
//function should reject with the string "Time Limit Exceeded".

export type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    return async (...args) => {
        return new Promise((resolve, reject) => {
            let timer = setTimeout(() => { reject("Time Limit Exceeded") }, t)
            fn(...args)
                .then(res => {
                    clearTimeout(timer)
                    resolve(res)
                })
                .catch(err => {
                    clearTimeout(timer);
                    reject(err)
                })
        })
    }
}

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
limited(150).catch(console.log) 