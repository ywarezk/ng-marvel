"use strict";
/**
 * setInterval
 * every second send a pulse using rxjs
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var helloObservable = new rxjs_1.Observable(function (observer) {
    setInterval(function () {
        observer.next('hello world');
    }, 1000);
});
helloObservable.subscribe(function (msg) {
    console.log(msg);
}, function (err) {
    console.log(err.message);
}, function () {
    console.log('completed');
});
