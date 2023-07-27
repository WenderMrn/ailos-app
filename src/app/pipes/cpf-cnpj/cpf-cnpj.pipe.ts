import { Pipe, PipeTransform } from '@angular/core';
import { cpf, cnpj } from 'cpf-cnpj-validator';

@Pipe({
  name: 'cpfCnpj',
})
export class CpfCnpjPipe implements PipeTransform {
  transform(value: string, type: 'cpf' | 'cnpj'): string {
    if (type === 'cpf') {
      return cpf.format(value);
    }
    return cnpj.format(value);
  }
}
