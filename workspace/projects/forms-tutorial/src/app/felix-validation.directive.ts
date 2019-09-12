import { Directive, Input } from '@angular/core';
import {Validator, AsyncValidator, AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn} from '@angular/forms';

export const felixValidation : ValidatorFn = (name) => (control: AbstractControl) => {
  if(!control.value) return;
  if (!(<string>control.value).toLowerCase().includes(name)) {
    return {
      'FELIX_ERROR': 'felix said nothing'
    }
  }
}

@Directive({
  selector: '[appFelixValidation]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useExisting: FelixValidationDirective}
  ]
})
export class FelixValidationDirective implements Validator {
  @Input('appFelixValidation') private _name : string = 'felix';

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return felixValidation(this._name)(control);
  }

}
