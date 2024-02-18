//Write a class that allows getting and setting key-value pairs, however a time until expiration
// is associated with each key.

//The class has three public methods:

//set(key, value, duration): accepts an integer key, an integer value, and a duration in 
//milliseconds. Once the duration has elapsed, the key should be inaccessible. 
//The method should return true if the same un-expired key already exists and false otherwise. 
//Both the value and duration should be overwritten if the key already exists.

//get(key): if an un-expired key exists, it should return the associated value. 
//Otherwise it should return -1.

//count(): returns the count of un-expired keys.
class TimeLimitedCache {
    cache: Map<number, [number, number]>
    constructor() {
        this.cache = new Map();
    }
    set(key: number, value: number, duration: number) {
        const expiration = Date.now() + duration;
        if (this.cache.has(key)) {
            this.cache.set(key, [value, expiration]);
            return true;
        }
        else {
            this.cache.set(key, [value, expiration]);
            return false;
        }

    }

    get(key: number): number {
        const values = this.cache.get(key);
        if (values !== undefined) {
            const [value, expiration] = values;
            if (expiration > Date.now()) {
                return value;
            } else {
                this.cache.delete(key)
            }
        }
        return -1;
    }

    count(): number {
        let count = 0
        for (let [key, [_, expiration]] of this.cache.entries()) {
            if (expiration < Date.now()) {
                this.cache.delete(key);
            }
            ++count
        }
        return count;
    }


}