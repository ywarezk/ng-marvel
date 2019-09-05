"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("zone.js/dist/zone-node");
console.log(Zone.current.name);
var angularZone = Zone.current.fork({
    name: 'angular',
    onHasTask: function () {
        console.log('timer enter and timer returned');
    }
});
angularZone.run(function () {
    setTimeout(function () {
        console.log('timer in angular room');
        console.log(Zone.current.name);
    }, 2000);
});
