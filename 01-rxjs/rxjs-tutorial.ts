/**
 * setInterval
 * every second send a pulse using rxjs
 */

import { Observable, Observer } from 'rxjs';

const helloObservable : Observable<string> = new 
    Observable((observer : Observer<string>) => {
        setInterval(() => {
            observer.next('hello world');
        }, 1000);
    });

    helloObservable.subscribe(
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