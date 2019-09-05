import 'zone.js';
import 'zone.js/dist/zone-node';

console.log(Zone.current.name);

const angularZone = Zone.current.fork({
    name: 'angular',
    onHasTask: () => {
        console.log('timer enter and timer returned');
    }
});

angularZone.run(() => {
    setTimeout(() => {
        console.log('timer in angular room');
        console.log(Zone.current.name);
    }, 2000);
})