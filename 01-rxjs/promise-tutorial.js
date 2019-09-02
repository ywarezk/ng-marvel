"use strict";
/**
 * setTimeout
 * wrapped in promise
 * setTimeout is triggered promise will send hello world to listeners
 */
var helloPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world');
        // resolve('foo bar');
        // reject()
    }, 1000);
});
helloPromise.then(function (msg) {
    console.log(msg);
}, function (err) {
    console.log(err.message);
});
