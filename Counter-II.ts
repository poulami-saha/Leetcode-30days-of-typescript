//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//increment() increases the current value by 1 and then returns it.
//decrement() reduces the current value by 1 and then returns it.
//reset() sets the current value to init and then returns it.

//Example 1:
//Input: init = 5, calls = ["increment","reset","decrement"]
//Output: [6,5,4]

//Example 2:
//Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
//Output: [1,2,1,0,0]

type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

const createCounterII = (initial: number): Counter => {
    let initialValue = initial;
    const increment = () => {
        return initialValue += 1
    }
    const decrement = () => {
        return initialValue -= 1
    }
    const reset = () => {
        return initialValue = initial
    }
    return {
        increment,
        decrement,
        reset,
    }
}

const counterII = createCounterII(5)
console.log(counterII.increment()); // 6
console.log(counterII.reset()) // 5
console.log(counterII.decrement()) // 4