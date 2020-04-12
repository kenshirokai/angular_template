import { ValidatorFn , AbstractControl} from '@angular/forms';

export function emailValidator(value: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        //emailの正規表現と一致するか検証
        const validationResult = value.test(control.value);
        //一致すればok しなければ任意のバリデーションメッセージを返す
        return validationResult ? null : {'emailValidation': {value: control.value}} ;
    }
}