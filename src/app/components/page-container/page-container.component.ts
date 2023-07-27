import { Component, OnInit } from '@angular/core';
import { NavbarStore } from 'src/app/store/navbar.store';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
})
export class PageContainerComponent implements OnInit {
  constructor(public store: NavbarStore) {}

  ngOnInit(): void {}

  get collapsed() {
    return this.store.state.collapsed;
  }
}
