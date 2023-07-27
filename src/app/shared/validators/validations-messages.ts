import { FormGroup, ValidationErrors } from '@angular/forms';

export const VALIDATION_MESSAGES: ValidationErrors = {
  required: 'Campo obrigatório.',
  cpf: 'CPF inválido.',
  cnpj: 'CNPJ inválido.',
};

export class ValidationsMessage {
  static resolve(formGroup: FormGroup, fieldName: string): string {
    const field = formGroup.get(fieldName);

    if (!field) return '';

    for (const errorKey in field.errors) {
      if (field.errors.hasOwnProperty(errorKey) && field.touched) {
        return VALIDATION_MESSAGES[errorKey].replace(
          '{0}',
          field.errors[errorKey]
        );
      }
    }

    return '';
  }
}
