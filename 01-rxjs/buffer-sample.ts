

import {Subject, Observable} from 'rxjs';
import { debounceTime, buffer } from 'rxjs/operators';

const dataStream : Subject<any> = new Subject();

const bet : Observable<any> = dataStream.pipe(
    buffer()
)

const alef : Observable<void> = dataStream.pipe(
    debounceTime(1000),
    mergeMap(() => bet)
);


