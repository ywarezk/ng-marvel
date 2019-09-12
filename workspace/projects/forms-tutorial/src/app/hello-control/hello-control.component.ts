import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-hello-control',
  template: `
    <input (blur)="focus()" (input)="change($event);" type="text" [value]="helloValue" />
  `,
  styleUrls: ['./hello-control.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: HelloControlComponent}
  ]
})
export class HelloControlComponent implements ControlValueAccessor{
  public helloValue : string;
  private _changeCb;
  private _touchCb;

  constructor() { }

  writeValue(obj: any): void {
    this.helloValue = obj
  }

  registerOnChange(fn: any): void {
    this._changeCb = fn;
  }

  registerOnTouched(fn: any): void{
    this._touchCb = fn;
  }

  change = (event) => {
    this._changeCb(event.target.value + 'hello world');
  }

  focus = () => {
    this._touchCb();
  }

}
