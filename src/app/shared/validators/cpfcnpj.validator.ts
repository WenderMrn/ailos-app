import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as cpfCnpj from 'cpf-cnpj-validator';

export function CpfCnpjValidator(type: 'cpf' | 'cnpj'): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    debugger;
    const value = control.value;

    const isValid =
      type === 'cpf' ? cpfCnpj.cpf.isValid(value) : cpfCnpj.cnpj.isValid(value);

    return !isValid ? { [type]: { value: control.value } } : null;
  };
}
