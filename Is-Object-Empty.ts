//Given an object or an array, return if it is empty.

//An empty object contains no key-value pairs.
//An empty array contains no elements.
//You may assume the object or array is the output of JSON.parse.

//Example1
//Input: obj = {"x": 5, "y": 42}
//Output: false

//Example 2:
//Input: obj = {}
//Output: true

//Example 3:
//Input: obj = [null, false, 0]
//Output: false

export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    for(const _ in obj){
        return false;
    } 
    return true;
}

console.log(isEmpty({"x": 5, "y": 42}))