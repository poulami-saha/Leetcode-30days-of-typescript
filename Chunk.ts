//Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, 
// but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

//You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

//Please solve it without using lodash's _.chunk function.
//Example 1:

//Input: arr = [1,2,3,4,5], size = 1
//Output: [[1],[2],[3],[4],[5]]

//Example 2:

//Input: arr = [1,9,6,3,2], size = 3
//Output: [[1,9,6],[3,2]]
//Example 3:

//Input: arr = [8,5,3,2,6], size = 6
//Output: [[8,5,3,2,6]]

export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let chunkedArray:Obj[][] = [];
    let iterations = arr.length / size;
    for (let i = 0; i < iterations; i++) {
        const chunked:Obj[] = arr.slice(i * size, i * size + size);
        chunkedArray.push(chunked)
    }
    return chunkedArray
}
