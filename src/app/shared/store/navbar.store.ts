import { Injectable } from '@angular/core';
import { Store } from './store';

export class NavbarState {
  collapsed: boolean = true;
}

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
