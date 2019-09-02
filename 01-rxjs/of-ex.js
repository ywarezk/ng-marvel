"use strict";
/**
 * understand the 'of' operator
 */
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var numberObservable = rxjs_1.of(10);
numberObservable.subscribe(function (myNumber) {
    console.log(myNumber);
});
