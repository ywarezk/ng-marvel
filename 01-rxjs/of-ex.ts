/**
 * understand the 'of' operator
 */

 import { of, Observable } from 'rxjs';

 const numberObservable : Observable<number> = of(10);

 numberObservable.subscribe((myNumber: number) => {
    console.log(myNumber);
 })