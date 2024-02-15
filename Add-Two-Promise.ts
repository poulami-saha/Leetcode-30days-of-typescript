//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 
//will both resolve with a number. 
//The returned promise should resolve with the sum of the two numbers.

//Example 1:

//Input: 
//promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
//promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
//Output: 7

type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return Promise.all([promise1, promise2]).
        then((results: number[]) => results[0] + results[1])
}

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log);