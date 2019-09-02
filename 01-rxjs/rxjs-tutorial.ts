/**
 * setInterval
 * every second send a pulse using rxjs
 */

import { Observable, Observer, Subscription, interval, of, Subject, BehaviorSubject, from } from 'rxjs';
import { map, catchError, take, bufferTime } from 'rxjs/operators';

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




const counterObservable : Observable<number> = interval(1000);
const helloObservable : Observable<string> = counterObservable.pipe(
    take(3),
    map((counter : number) => {
        return `hello world ${counter}`;
    }),
    catchError((err: Error) =>  {
        // throw new Error(...)
        return of('hello error');
    })
)

helloObservable.pipe(
    take(1)
).toPromise();



    // Observable<number>

    const helloSubscription : Subscription = helloObservable.subscribe(
        (msg: string) => {
            console.log(msg);
        },
        (err: Error) => {
            console.log(err.message);
        },
        () => {
            console.log('completed');    
        }
    )

    helloObservable.subscribe(
        () => null
    );

    // setTimeout(() => {
    //     helloSubscription.unsubscribe();
    // }, 3000)



const helloSubject : Subject<string> = new Subject();

// setInterval(() => {
//     helloSubject.next('hello world');
// }, 1000);

helloSubject.next('hello world');

helloSubject.subscribe((msg: string) => {
    console.log(msg);
})