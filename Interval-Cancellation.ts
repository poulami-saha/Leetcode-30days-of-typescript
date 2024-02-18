//Given a function fn, an array of arguments args, and an interval time t, 
//return a cancel function cancelFn.

//After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

//setTimeout(cancelFn, cancelTimeMs)
//The function fn should be called with args immediately and 
//then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.

export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
export type Fn = (...args: JSONValue[]) => void

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    fn(...args);
    let intervalId = setInterval(() => {
        fn(...args);
    }, t);
    return function () {
        clearInterval(intervalId);
    }
}