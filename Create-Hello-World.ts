//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//Example 1
// Input: args = []
// Output: "Hello World"

//Example 2
//Input: args = [{},null,42]
//Output: "Hello World"

//Constraints
//0 <= args.length <= 10

const createHelloWorld = (): any => {
    return (...args: any[]): string => {
        if (args.length <= 10 && args.length >= 0)
            return "Hello World"
        else
            return ""
    }
}

const f = createHelloWorld();
console.log(f()); // "Hello World"