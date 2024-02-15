//Write a function argumentsLength that returns the count of arguments passed to it.

//Example 1:
//Input: args = [5]
//Output: 1

//Example 2:
//Input: args = [{}, null, "3"]
//Output: 3

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
const argumentsLength = (...args:JSONValue[]): number => [...args].length;

console.log(argumentsLength({}, null, "3"))