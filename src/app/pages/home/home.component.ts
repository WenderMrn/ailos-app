import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common-service.service';
import { Cooperator } from 'src/app/services/types';
import { CpfCnpjValidator } from 'src/app/shared/validators/cpfcnpj2.validatior';
import { ValidationsMessage } from 'src/app/shared/validators/validations-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    cpf: ['', [Validators.required, CpfCnpjValidator.cpf]],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  dataResult: Cooperator[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private service: CommonService
  ) {}

  ngOnInit(): void {
    //this.submit();
  }

  resolveMessage(formGroup: FormGroup, fieldName: string) {
    return ValidationsMessage.resolve(formGroup, fieldName);
  }

  submit() {
    const document = this.firstFormGroup.get('cpf')?.value;
    this.service.searchDocument(document).subscribe({
      next: (response) => {
        this.dataResult = response.data;
      },
    });
  }
}
