import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cooperator } from 'src/app/shared/services/types';
import { CpfCnpjValidator } from 'src/app/shared/validators/cpfcnpj2.validatior';
import { ValidationsMessage } from 'src/app/shared/validators/validations-messages';

@Component({
  selector: 'app-step-start',
  templateUrl: './step-start.component.html',
  styleUrls: ['./step-start.component.scss'],
})
export class StepStartComponent implements OnInit {
  formGroup = this._formBuilder.group({
    cpf: ['', [Validators.required, CpfCnpjValidator.cpf]],
  });

  @Input()
  dataItems: Cooperator[] = [];

  @Output() submitEvent = new EventEmitter<string>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  resolveMessage(formGroup: FormGroup, fieldName: string) {
    return ValidationsMessage.resolve(formGroup, fieldName);
  }

  submit() {
    this.submitEvent.emit(this.formGroup.get('cpf')?.value);
  }
}
