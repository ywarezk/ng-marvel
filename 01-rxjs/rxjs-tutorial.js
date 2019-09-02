"use strict";
/**
 * setInterval
 * every second send a pulse using rxjs
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// const helloObservable : Observable<string> = new 
//     Observable((observer : Observer<string>) => {
//         console.log('observable async function');
//         let counter = 0;
//         const intervalId = setInterval(() => {
//             counter++;
//             observer.next('hello world');
//             // if (counter === 3) {
//             //     // observer.complete();
//             //     observer.error(new Error('something happened'))
//             // }
//         }, 1000);
//         return function() {
//             clearInterval(intervalId);
//         }
//     });
var counterObservable = rxjs_1.interval(1000);
var helloObservable = counterObservable.pipe(operators_1.take(3), operators_1.map(function (counter) {
    return "hello world " + counter;
}), operators_1.catchError(function (err) {
    // throw new Error(...)
    return rxjs_1.of('hello error');
}));
helloObservable.pipe(operators_1.take(1)).toPromise();
// Observable<number>
var helloSubscription = helloObservable.subscribe(function (msg) {
    console.log(msg);
}, function (err) {
    console.log(err.message);
}, function () {
    console.log('completed');
});
helloObservable.subscribe(function () { return null; });
// setTimeout(() => {
//     helloSubscription.unsubscribe();
// }, 3000)
var helloSubject = new rxjs_1.Subject();
// setInterval(() => {
//     helloSubject.next('hello world');
// }, 1000);
helloSubject.next('hello world');
helloSubject.subscribe(function (msg) {
    console.log(msg);
});
