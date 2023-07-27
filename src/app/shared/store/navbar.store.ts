import { Injectable } from '@angular/core';
import { Store } from './store';
import { NavbarState } from './types';

@Injectable({ providedIn: 'root' })
export class NavbarStore extends Store<NavbarState> {
  constructor() {
    super(new NavbarState());
  }

  public toggleMenu(): void {
    this.setState({
      ...this.state,
      collapsed: !this.state.collapsed,
    });
  }
}
