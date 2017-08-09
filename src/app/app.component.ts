import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromRoot from './index';

@Component({
  selector: 'my-app',
  template: `
    <h4>From parent: {{text}}</h4>
    <h1>{{title}}</h1>
    <nav>
      <a routerLink='/dashboard'>Dashboard</a>
      <a routerLink='/heroes'>Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Tour of Heroes";
  private text: string;

  constructor(
    private _store: Store<fromRoot.AppState>
    ) {
      _store.select('counter').subscribe((state) => {
        this.text = state.text;
        console.log('from dashboard state=', this.text)
      })
  }
}
