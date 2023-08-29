import { Component } from '@angular/core';
import {HeaderComponent} from "./layouts/header/header.component";

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `,
  imports: [ HeaderComponent ]
})
export class AppComponent { }
