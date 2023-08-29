import { Component } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-header',
  template: `
    <header class="container">
      <hgroup>
        <h1>Produtos</h1>
        <h2>Tela de Cálculo de Preços</h2>
      </hgroup>
    </header>
  `
})
export class HeaderComponent {

}
