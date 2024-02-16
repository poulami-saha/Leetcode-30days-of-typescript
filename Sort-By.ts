//Given an array arr and a function fn, return a sorted array sortedArr. 
//You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
//sortedArray must be sorted in ascending order by fn output.

//You may assume that fn will never duplicate numbers for a given array.
//Example 1:

//Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
//Output: [1, 2, 3, 4, 5]

//Example 2:

//Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
//Output: [{"x": -1}, {"x": 0}, {"x": 1}]

export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    const sortFunction = (a, b) => fn(a) - fn(b);
    return arr.slice().sort(sortFunction); //To avoid mutating the original array
}

