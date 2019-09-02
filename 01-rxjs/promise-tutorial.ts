/**
 * setTimeout
 * wrapped in promise
 * setTimeout is triggered promise will send hello world to listeners
 */

const helloPromise : Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world');
        // resolve('foo bar');
        // reject()
    }, 1000);
});

helloPromise.then(
    (msg: string) => {
        console.log(msg);
    },
    (err : Error) => {
        console.log(err.message);
    }
)


