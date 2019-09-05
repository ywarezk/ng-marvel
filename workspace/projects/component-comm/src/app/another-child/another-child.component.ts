import { 
  EventEmitter, Output,
  ContentChild,
  Component, OnInit, ViewEncapsulation, Input, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';
import { HelloService } from '../hello.service';
import { Subscription } from 'rxjs';
import { ContentChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-another-child',
  template: `
    <div class="another-child">
      <p>
        another-child works! {{msg.message}} {{title}}
      </p>
      <button (click)="sendHelloToParent()">
        click me
      </button>

      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .another-child {
      }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated,
  exportAs: 'anotherChildHello'
})
export class AnotherChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  title : string = '';
  @Input() msg;
  private _subscription : Subscription;
  @ContentChild(ChildComponent, {static: true}) brother : ChildComponent;
  
  // @Input() set stam() {

  // }
  
  @Output() hello : EventEmitter<string> = new EventEmitter();

  constructor(private _hello : HelloService) { }

  // used for initialization
  // runs once 
  // input properties are populated
  // view display data bound properties
  ngOnInit() {
    this._subscription = this._hello.hello.subscribe((msg: string) => {
      this.title = msg;
    })
  }

  // run multiple times
  // when input change
  // ===
  ngOnChanges(change : SimpleChanges) {
    console.log('ngOnChanges');
    console.log(change);
  }

  ngDoCheck() {

  }

  /**
   * send hello world to parent
   */
  sendHelloToParent = () => {
    this.hello.emit('hello from child');
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  sayHello = () => {
    return 'parent please call this method, hello world';
  }

}
