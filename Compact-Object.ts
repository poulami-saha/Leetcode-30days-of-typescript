//Given an object or array obj, return a compact object. A compact object is the same as the 
//original object, 
//except with keys containing falsy values removed. This operation applies to the object and any nested objects. 
//Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

//You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

//Example 1:

//Input: obj = [null, 0, false, 1]
//Output: [1]

//Example 2:

//Input: obj = {"a": null, "b": [false, 1]}
//Output: {"b": [1]}

export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;


function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map((elem: JSONValue) => compactObject(elem as Obj))
    }else{
        if(typeof obj ==="object" && obj!==null){
            let result=new Map();
            for(let key in obj){
                let value=compactObject(obj[key] as Obj)
                if(value){
                    result.set(key,value)
                }
            }
            return Object.fromEntries(result.entries());
        }
    }
    return obj;
}
console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({"a": null, "b": [false, 1]}))