import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cooperator } from './types';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  searchDocument(document: string): Observable<{ data: Cooperator[] }> {
    // mock
    return new Observable((subscribe) => {
      subscribe.next({
        data: [
          {
            title: 'Situação cadastral do CPF',
            description: 'Consulta na Receita Federal',
            items: [
              {
                label: 'Nome',
                value: 'Mariane de Souza Oliveira',
                icon: {
                  name: 'person',
                  color: 'grey',
                },
              },
              {
                label: 'Situação do CPF',
                value: 'Regular',
                icon: {
                  name: 'check_circle_outline',
                  color: 'green',
                },
              },
            ],
          },
          {
            title: 'Conta aplicação',
            description: 'Cooperativa Viacredi',
            items: [
              {
                label: 'Número da conta',
                value: '557932-4',
                icon: {
                  name: 'credit_card',
                  color: 'grey',
                },
              },
            ],
            duplicateAccountButton: true,
          },
          {
            title: 'Conta corrente',
            description: 'Cooperativa Viacredi',
            items: [
              {
                label: 'Número da conta',
                value: '778461-8',
                icon: {
                  name: 'credit_card',
                  color: 'grey',
                },
              },
            ],
            duplicateAccountButton: true,
          },
        ],
      });
    });
  }
}
