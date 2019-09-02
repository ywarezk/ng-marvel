/**
 * setTimeout
 * wrapped in promise
 * setTimeout is triggered promise will send hello world to listeners
 */

const helloPromise : Promise<string> = new Promise((resolve, reject) => {
    console.log('promise async function');
    setTimeout(() => {
        // resolve('hello world');
        // resolve('foo bar');
        reject(new Error())
    }, 1000);
});

// Promise.resolve()

const stamPromise : Promise<RegExp | boolean> = helloPromise
    .then(
        (msg: string) => {
            console.log(msg);
            // return msg.length;
            return new Promise((resolve, reject) => {
                resolve(/[0-9]+/);
            })
        },
        (err : Error) => {
            console.log(err.message);
            // return true;
            // throw new Error('...');
        }
    )
    // .catch(() => {

    // })
    // .then()
    // .then()
    // ...

helloPromise.then(
    (msg) => console.log('second listener')
)

class Person{
    constructor() {
        // async function hello() {
        //     await 
        // }   
        // hello();
    }
}


async function stam() {
    try {
        const result = await promise1;
        const resul2 = await promise2;
    } catch(err) {

    }
    
}













