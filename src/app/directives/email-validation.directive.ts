import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { emailValidator } from '../lib/validator/emailValidator';

@Directive({
  selector: '[appEmailValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true}]
})
export class EmailValidationDirective implements Validator {
  @Input('appEmailValidation') regExpEmail: string;
  constructor() { }
  validate(control: AbstractControl): {[key: string]: any} | null {
    //validatorFnの引数にAbstructControlがいるので引数として渡して実行している
    return this.regExpEmail ? emailValidator(new RegExp(this.regExpEmail, 'i'))(control): null;
  }
}
