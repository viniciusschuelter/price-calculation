import { Component, effect, signal } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <header class="container">
      <hgroup>
        <h1>Produtos</h1>
        <h2>Tela de Cálculo de Preços</h2>
      </hgroup>
      <a class="theme-switcher c-pointer" (click)="themeSignal.set(themeValues[themeSignal()].changeTo)">
        <h1>{{themeValues[themeSignal()].icon}}</h1>
      </a>
    </header>
  `,
  styles: [`
    :host {
      header {
        position: relative;
        .theme-switcher {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }
      }
    }
  `]
})
export class HeaderComponent {

  themeSignal = signal('light');
  themeValues: any = { 'light': { icon: '☾', changeTo: 'dark'},  'dark': { icon: '☀', changeTo: 'light'}};

  constructor() {
    effect( () => {
      console.log(`theme changed ${this.themeSignal()}`);
      document.documentElement.setAttribute('data-theme', this.themeSignal());
    })
  }
}
