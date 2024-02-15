//Given a function fn, return a new function that is identical to the original function except 
//that it ensures fn is called at most once.

//The first time the returned function is called, it should return the same result as fn.
//Every subsequent time it is called, it should return undefined.

// export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
// type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

    
export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
let isCalled=false;
let result:JSONValue
    return function (...args) {
        if(!isCalled){
            isCalled=true
            // @ts-ignore: 'this' implicitly has type 'any' because it does not have a type annotation.
            result=fn.apply(this,args)
            return result
        } else{
            return undefined;
        }
    };  
}

let fn = (a:number,b:number,c:number) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6));