import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { cnpj, cpf } from 'cpf-cnpj-validator';

export class CpfCnpjValidator {
  static get cpf(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      return !cpf.isValid(value) ? { cpf: { value: control.value } } : null;
    };
  }

  static get cnpj(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      return !cnpj.isValid(value) ? { cnpj: { value: control.value } } : null;
    };
  }
}
