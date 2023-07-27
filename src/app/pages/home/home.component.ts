import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common-service.service';
import { Cooperator } from 'src/app/shared/services/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dataResult: Cooperator[] = [];

  constructor(private service: CommonService) {}

  ngOnInit(): void {}

  submit(document: string) {
    this.service.searchDocument(document).subscribe({
      next: (response) => {
        this.dataResult = response.data;
      },
    });
  }
}
