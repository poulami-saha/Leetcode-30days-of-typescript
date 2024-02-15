//Write a function expect that helps developers test their code. 
//It should take in any value val and return an object with the following two functions.

//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

//Example 1:

//Input: func = () => expect(5).toBe(5)
//Output: {"value": true}

//Example 2:

//Input: func = () => expect(5).toBe(null)
//Output: {"error": "Not Equal"}

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};
const expect = (assert: number):ToBeOrNotToBe => {
    const toBe = (expect: number) => {
        if (assert === expect) {
            return true;
        } else {
            throw "Not Equal";
        }

    };
    const notToBe = (expect: number) => {
        if (assert !== expect) {
            return true;
        } else
            throw "Equal";
    }

    return {
        toBe,
        notToBe
    }
}

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); 