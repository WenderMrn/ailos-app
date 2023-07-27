import { Component, OnInit } from '@angular/core';
import { NavbarState, NavbarStore } from 'src/app/store/navbar.store';

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

  get collapsed() {
    return this.store.state.collapsed;
  }
}
