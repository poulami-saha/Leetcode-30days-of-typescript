//Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value 
//every subsequent time it is called (n, n + 1, n + 2, etc).

//Example 1
//Input: n = 10 
// Output: [10,11,12]

//Example 2
//Input:n = -2
//Output: [-2,-1,0,1,2]

//Constraints
//-1000 <= n <= 1000

const createCounter = (n: number): any => {
    const counter = () => n++;
    return counter;
}

const counter = createCounter(10)
console.log(counter())// 10
console.log(counter())// 11
console.log(counter())// 12