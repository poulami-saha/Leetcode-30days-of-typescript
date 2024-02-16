//Write code that enhances all arrays such that you can call the array.last() method on any array 
//and it will return the last element. If there are no elements in the array, it should return -1.

//You may assume the array is the output of JSON.parse.
//Example 1:
//Input: nums = [null, {}, 3]
//Output: 3

//Example 2:
//Input: nums = []
//Output: -1

declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function () {
    const array = this;
    const length = array.length;
    if (length === 0) {
        return -1;
    }
    return array.slice(length - 1)[0]
}

const arr = [1, 2, 3];
console.log(arr.last()); // 3


export { };