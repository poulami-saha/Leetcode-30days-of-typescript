//Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. 
//It can resolve any value.

//Example 1:

//Input: millis = 100
//Output: 100

async function sleep(millis: number): Promise<void> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },millis)
    })
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100