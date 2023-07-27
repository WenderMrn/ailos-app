import { Component, OnInit } from '@angular/core';
import { NavbarStore } from 'src/app/shared/store/navbar/navbar.store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public store: NavbarStore) {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.store.toggleMenu();
  }

  toggleMenuMobile(): void {
    //TODO:
  }

  get collapsed() {
    return this.store.state.collapsed;
  }
}
