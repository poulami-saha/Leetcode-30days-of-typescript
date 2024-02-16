//Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array 
//and it will return a grouped version of the array.

//A grouped array is an object where each key is the output of fn(arr[i]) 
//and each value is an array containing all items in the original array with that key.

//The provided callback fn will accept an item in the array and return a string key.

//The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

//Example 1:

//Input: 
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ], 
// fn = function (item) { 
//   return item.id; 
// }
// Output: 
// { 
//   "1": [{"id": "1"}, {"id": "1"}],   
//   "2": [{"id": "2"}] 
// }
declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn) {
    const array = this;
    const result = new Map();
    for (let i = 0; i < array.length; i++) {
        const key = fn(array[i])
        const value = result.get(key);
        if (!!value) {
            result.set(key, [...value, array[i]])
        }
        else {
            result.set(key, [array[i]])
        }
    }
    return Object.fromEntries(result)
}

//Alternate Approach
Array.prototype.groupBy = function (fn) {
    const array = this;
    const result = {}
    array.forEach(item => {
        const key = fn(item)
        if (result.hasOwnProperty(key)) {
            result[key].push(item)
        } else {
            result[key] = [item]
        }
    })
    return result
}

console.log([{ "id": "1" }, { "id": "1" }, { "id": "2" }].groupBy(function (item) { return item.id; }))
export { }