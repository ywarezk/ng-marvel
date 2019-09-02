"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var dataStream = new rxjs_1.Subject();
var bet = dataStream.pipe(operators_1.buffer());
var alef = dataStream.pipe(operators_1.debounceTime(1000), mergeMap(function () { return bet; }));
